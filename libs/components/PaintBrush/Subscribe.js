const i = Symbol("$$PAINT_BRUSH_EVENT$$");
function r(f) {
  return f[i] || (f[i] = {}), f[i];
}
function v(f) {
  f[i] || delete f[i];
}
class E {
  /**
   * 判断是否注册了事件
   * @param name  事件类型
   */
  hasListener(t) {
    const e = r(this);
    return e && e[t] && e[t].length > 0;
  }
  /**
   * 注册事件
   * @param  name    事件类型
   * @param  callback 事件回调函数
   * @param  once     是否只执行一次
   * @returns 解除事件
   * @template K 预设的监听事件名称
   * @template C 回调函数函数上下文
   */
  on(t, e, s) {
    const o = r(this);
    return o[t] || (o[t] = []), o[t].push([e, s || !1]), () => this.off(t, e);
  }
  /**
   * 注册事件(是否只执行一次)
   * @param  name     事件类型
   * @param  callback 事件回调函数
   * @returns 解除事件
   * @template K 预设的监听事件名称
   * @template C 回调函数函数上下文
   */
  once(t, e) {
    return this.on(t, e, !0);
  }
  /**
   * 解除事件
   *
   * 如果 name 不传的话解除对应所有事件
   * 如果 name, callback 不传的话解除所有name的所有事件
   * @param  name     事件类型
   * @param  callback 事件回调函数
   * @template K 预设的监听事件名称
   */
  off(t, e) {
    if (t === void 0) {
      v(this);
      return;
    }
    const s = r(this);
    if (s[t] || (s[t] = []), e === void 0) {
      s[t].length = 0;
      return;
    }
    let o = 0;
    for (; o < s[t].length && s[t][o][0] !== e; o++)
      ;
    o < s[t].length && s[t].splice(o, 1);
  }
  /**
   * 触发事件
   * @param  name  事件类型
   * @param  data  触发事件的数据
   * @returns canceled 是否被触发取消
   * @template K 预设的监听事件名称
   */
  emit(t, ...e) {
    let s = !1;
    const l = r(this)[t] || [];
    for (let h of l.slice()) {
      const [n, u = !1] = h, c = n(...e);
      u && this.off(t, n), c === !1 && (s = !0);
    }
    return s;
  }
}
export {
  E as Subscribe
};
