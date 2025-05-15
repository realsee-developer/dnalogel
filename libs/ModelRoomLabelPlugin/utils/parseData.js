function m(e) {
  return e.model_room_labels.map(({ id: o, pano_index: a, floor_index: l, name: n, position: r, longitude: d }) => ({
    id: o,
    name: n,
    position: r,
    longitude: d,
    panoIndex: a,
    floorIndex: l,
    zIndex: 0,
    visible: !1,
    transform: ""
  }));
}
export {
  m as parseModelRoomLabelPluginData
};
