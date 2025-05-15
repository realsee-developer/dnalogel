function v(f) {
  return typeof Symbol == "undefined" ? `$Symbol<${f}>$` : Symbol(f);
}
const i = v("$$EVENT$$");
function r(f) {
  return f[i] || (f[i] = {}), f[i];
}
function d(f) {
  f[i] && delete f[i];
}
class E {
  /**
   * 判断是否注册了事件
   * @param name - 事件类型
   */
  hasListener(t) {
    const e = r(this);
    return !!(e != null && e[t] && e[t].length > 0);
  }
  /**
   * 注册事件
   * @param name - 事件类型
   * @param callback - 事件回调函数
   * @param once - 是否只执行一次
   * @returns 解除事件
   * @template K - 预设的监听事件名称
   * @template C - 回调函数函数上下文
   */
  on(t, e, o) {
    const s = r(this);
    return s[t] || (s[t] = []), s[t].push([e, o || !1]), () => this.off(t, e);
  }
  /**
   * 注册事件(是否只执行一次)
   * @param name - 事件类型
   * @param callback - 事件回调函数
   * @returns 解除事件
   * @template K - 预设的监听事件名称
   * @template C - 回调函数函数上下文
   */
  once(t, e) {
    return this.on(t, e, !0);
  }
  /**
   * 解除事件
   *
   * 如果 name 不传的话解除对应所有事件
   * 如果 name, callback 不传的话解除所有name的所有事件
   * @param name - 事件类型
   * @param callback - 事件回调函数
   * @template K - 预设的监听事件名称
   */
  off(t, e) {
    if (t === void 0) {
      d(this);
      return;
    }
    const o = r(this);
    if (o[t] || (o[t] = []), e === void 0) {
      o[t].length = 0;
      return;
    }
    let s = 0;
    for (; s < o[t].length && o[t][s][0] !== e; s++)
      ;
    s < o[t].length && o[t].splice(s, 1);
  }
  /**
   * 触发事件
   * @param name - 事件类型
   * @param data - 触发事件的数据
   * @returns canceled 是否被触发取消
   * @template K - 预设的监听事件名称
   */
  emit(t, ...e) {
    let o = !1;
    const l = r(this)[t] || [];
    for (let u of l.slice()) {
      const [n, c = !1] = u, h = n(...e);
      c && this.off(t, n), h === !1 && (o = !0);
    }
    return o;
  }
}
export {
  E as Subscribe
};
