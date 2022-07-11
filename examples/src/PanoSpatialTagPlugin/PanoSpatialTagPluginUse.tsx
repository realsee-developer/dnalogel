import * as React from 'react';
import * as THREE from 'three';
import { Five, Mode } from "@realsee/five"
import { unsafe__useFiveInstance } from "@realsee/five/react"
import useFetchDatas, { DATA_TYPES } from "../utils/useFetchDatas";


interface PanoSpatialTagPluginUsePropTypes {}

const PanoSpatialTagPluginUse: React.FC = () => {
    const five = unsafe__useFiveInstance()
    const model_tag = useFetchDatas(DATA_TYPES.MODEL_TAG, '81gmMq5eXl5I9y7JMk')

    React.useEffect(() => {

        if (!model_tag) return
        const points = model_tag.map((v) => {
          const { id, position, normal, weight, name, price, brand } = v
          return {
            id,
            position,
            normal,
            weight,
            replacement: {
              name,
              price,
              brand,
            },
          }
        })
        five.plugins.panoSpatialTagPlugin.load({
          points,
          template: `
            <div class="tag-wrapper" style="pointer-events: auto;">
              <%if (brand) {%><div style="background:url('//vrlab-static.ljcdn.com/release/web/brand_bg.15e354d0.png') no-repeat;background-size:100% 100%;box-shadow: 0 -0.625rem 0.625rem 0 rgba(0, 0, 0, 0.1);
                border-radius: 0.0625rem;overflow: hidden;font-size: 0.6875rem;padding:0.125rem;width:max-content;margin-bottom:0.375rem;line-height:1;">
                <%= brand %>
              </div><% } %>
              <div style="max-width:7rem;overflow:hidden;white-space: nowrap;text-overflow: ellipsis;line-height:1;margin-bottom:0.375rem;"><%= name %></div>
              <%if (price) {%><div style="display:flex;align-items:center;font-family: Helvetica;font-size: 0.9375rem;font-weight:600;line-height:1;color: #ffdda1;text-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.1);">
                <svg height="12" viewBox="0 0 10 12" width="10" xmlns="http://www.w3.org/2000/svg">
                  <path d="m6.30970149 6.49402985h1.82910448v1.2761194h-2.12686567v3.50223885h-2.45298508v-3.50223885h-2.12686567v-1.2761194h1.82910448l-3.26119403-6.49402985h2.60895522l2.16940299 5.3738806 2.2119403-5.3738806h2.50970149z" fill="#ffdda1" transform="translate(.182 .682)"/>
                </svg>
                <span><%= price %></span>
              </div>
              <% } %>
            </div>`,
          events: {
            'tag-wrapper': (id) => {
                five.plugins.panoSpatialTagPlugin.fold(id)
            },
          },
        })
    }, [model_tag])

    return null
}

export default PanoSpatialTagPluginUse
