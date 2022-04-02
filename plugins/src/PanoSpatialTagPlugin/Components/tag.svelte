<script lang="ts">
  import { onMount, onDestroy, afterUpdate } from 'svelte'
  import { PanoSpatialTagPluginContentEvent } from '../typings'
  import { currentTarget } from '../store'
  export let id: number | string
  export let upsideDown: boolean
  export let content: string
  export let contentZoom: number
  export let lineZoom: number
  export let destroying: boolean
  export let folded: boolean
  export let dispose: () => void
  export let events: PanoSpatialTagPluginContentEvent
  export let hooks

  let show: boolean
  let timeoutId: NodeJS.Timeout = setTimeout(() => {
    if (!folded) show = true
    timeoutId = undefined
  }, 100)

  const handleClickContent = event => {
    Object.keys(events).forEach(key => {
      if (event.target.getAttribute('className').includes(key)) events[key](id)
    })
  }

  const unsubscribe = currentTarget.subscribe((str: string) => {
    if (str === null) return
    const [currentId, date] = str.split('-PanoSpatialTagPlugin-')
    if (id === currentId) {
      hooks.emit('clickOrigin', { id, date, folded })
      if (!timeoutId) {
        show = folded
        folded = !folded
        timeoutId = setTimeout(() => {
          timeoutId = undefined
        }, 1500)
      }
    }
  })

  afterUpdate(() => {
    if (timeoutId) return
    show = !folded
  })

  onDestroy(() => {
    unsubscribe()
    dispose()
  })
</script>

<div 
  class:PanoSpatialTagPlugin__tag-x={true}
  class:PanoSpatialTagPlugin__tag-upside-down={upsideDown}
  class:PanoSpatialTagPlugin__tag-show={show}
  class:PanoSpatialTagPlugin__tag-hide={show === false || destroying}
>
  <div class="PanoSpatialTagPlugin__tag-line">
    <i class="PanoSpatialTagPlugin__tag-flagpole"
      style="width: {lineZoom}rem"
    />
    <i class="PanoSpatialTagPlugin__tag-line1"/>
    <i class="PanoSpatialTagPlugin__tag-line2"/>
  </div>
  <div class="PanoSpatialTagPlugin__tag-animate" style="transform: scale({contentZoom * 3})">
    <div class="PanoSpatialTagPlugin__tag-content" on:click="{handleClickContent}">
      {@html content}
    </div>
  </div>
</div>

<style>
  .PanoSpatialTagPlugin__tag-x {
    position: relative;
    display: block;
    white-space: nowrap;
    box-sizing: border-box;
    width: 25rem;
    height: 10rem;
    color: #FFF;
    transform: translate(0, -100%);
  }

  .PanoSpatialTagPlugin__tag-x:before {
    content: '';
    position: absolute;
    width: 30rem;
    height: 30rem;
    top: 50%;
    left: 50%;
    transform: translate(-65%, -55%);
    z-index: -1;
    opacity: 0;
    transition: opacity .8s .6s;
    background: url('https://vrlab-image4.ljcdn.com/release/web/PanoSpatialTagPlugin__blur.png');
    background-size: 30rem 30rem;
  }

  .PanoSpatialTagPlugin__tag-flagpole {
    position: absolute;
    top: 0;
    left: 0;
    height: 7rem;
    width: .15rem;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, .1));
    box-shadow: 0 .1rem .5rem rgba(0, 0, 0, .2);
    opacity: 0;
    transform: translate(-50%, 60%) scaleY(0);
    transition: transform .4s cubic-bezier(.44,.44,.74,.98) , opacity .4s cubic-bezier(.44,.44,.74,.98) ;
    transform-origin: center bottom;
  }

  .PanoSpatialTagPlugin__tag-line1 {
    position: absolute;
    top: 0;
    left: -0.5rem;
    height: 1.8rem;
    width: .1rem;
    background: #fff;
    opacity: 0;
    transform: translate(-50%, 200%) scaleY(0);
    transform-origin: center top;
  }

  .PanoSpatialTagPlugin__tag-line2 {
    position: absolute;
    top: 0;
    left: -0.3rem;
    height: 1.8rem;
    width: .1rem;
    background: #fff;
    opacity: 0;
    transform: translate(-50%, 200%) scaleY(0);
    transform-origin: center top;
  }

  .PanoSpatialTagPlugin__tag-show .PanoSpatialTagPlugin__tag-line1 {
    animation: PanoSpatialTagPlugin__tag-line1 linear .5s forwards .45s;
  }

  .PanoSpatialTagPlugin__tag-show .PanoSpatialTagPlugin__tag-line2 {
    animation: PanoSpatialTagPlugin__tag-line2 linear .5s forwards .65s;
  }

  .PanoSpatialTagPlugin__tag-x.PanoSpatialTagPlugin__tag-upside-down {
    transform: translate(0, 0);
  }

  .PanoSpatialTagPlugin__tag-upside-down .PanoSpatialTagPlugin__tag-line {
    transform: translate(0, 10rem) scaleY(-1);
  }

  .PanoSpatialTagPlugin__tag-animate {
    position: relative;
    height: 100%;
    overflow: hidden;
    transform-origin: left top;
  }

  .PanoSpatialTagPlugin__tag-upside-down .PanoSpatialTagPlugin__tag-animate{
    transform-origin: left bottom;
  }

  .PanoSpatialTagPlugin__tag-content {
    position: absolute;
    display: inline-block;
    transform: translate(-100%, 0);
    transition: transform .9s cubic-bezier(0,.65,.16,1.08) .6s;
    padding-left: .5rem;
    font-size: 1rem;
  }

  .PanoSpatialTagPlugin__tag-upside-down .PanoSpatialTagPlugin__tag-content{
    bottom: 0;
  }

  .PanoSpatialTagPlugin__tag-show .PanoSpatialTagPlugin__tag-flagpole {
    opacity: 1;
    transform: translate(-50%, 0) scaleY(1);
  }

  .PanoSpatialTagPlugin__tag-show:before {
    opacity: .32;
  }

  .PanoSpatialTagPlugin__tag-show .PanoSpatialTagPlugin__tag-content {
    transform: translate(0, 0);
  }

  .PanoSpatialTagPlugin__tag-hide .PanoSpatialTagPlugin__tag-flagpole {
    opacity: 0;
    transform: translate(-50%, 60%) scaleY(0);
    transition: transform .5s .55s, opacity .4s .55s;
  }

  .PanoSpatialTagPlugin__tag-hide:before {
    opacity: 0;
    transition: opacity .8s;
  }

  .PanoSpatialTagPlugin__tag-hide .PanoSpatialTagPlugin__tag-content {
    transform: translate(-100%, 0);
    transition: transform .6s cubic-bezier(.53,.06,.88,.59);
  }

  .PanoSpatialTagPlugin__tag-hide .PanoSpatialTagPlugin__tag-content * {
    pointer-events: none;
  }

  .PanoSpatialTagPlugin__tag-hide .PanoSpatialTagPlugin__tag-line1 {
    opacity: 0.5; 
    transform: translate(-50%, 10%) scaleY(0);
    animation: PanoSpatialTagPlugin__tag-line1-hide linear .28s forwards .3s;
  }

  .PanoSpatialTagPlugin__tag-hide .PanoSpatialTagPlugin__tag-line2 {
    opacity: 0.5; 
    transform: translate(-50%, 0) scaleY(0);
    animation: PanoSpatialTagPlugin__tag-line2-hide linear .28s forwards .45s;
  }

  @keyframes PanoSpatialTagPlugin__tag-line1 {
    0% { opacity: 0; transform: translate(-50%, 250%) scaleY(1); }
    50% { opacity: 0.5; transform: translate(-50%, 135%) scaleY(1); }
    100% { opacity: 0.5; transform: translate(-50%, 20%) scaleY(0); }
  }

  @keyframes PanoSpatialTagPlugin__tag-line2 {
    0% { opacity: 0; transform: translate(-50%, 250%) scaleY(1); }
    50% { opacity: 0.5; transform: translate(-50%, 125%) scaleY(1); }
    100% { opacity: 0.5; transform: translate(-50%, 0) scaleY(0); }
  }

  @keyframes PanoSpatialTagPlugin__tag-line1-hide {
    0% { opacity: 0.5; transform: translate(-50%, 10%) scaleY(0); }
    50% { opacity: 0.2; transform: translate(-50%, 105%) scaleY(1); }
    100% { opacity: 0; transform: translate(-50%, 200%) scaleY(0); }
  }

  @keyframes PanoSpatialTagPlugin__tag-line2-hide {
    0% { opacity: 0.5; transform: translate(-50%, 0) scaleY(0); }
    50% { opacity: 0.2; transform: translate(-50%, 100%) scaleY(1); }
    100% { opacity: 0; transform: translate(-50%, 200%) scaleY(0); }
  }
</style>
