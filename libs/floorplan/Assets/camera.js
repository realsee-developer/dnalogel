const v = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAMAAAANf8AYAAAC2VBMVEUAAACCnP+Dn/+Enf+HqP+Gp/+Fof+Gpf+IrP+Lsf+Dof+Cmv+Lsv+Mtf+Eo/+Bmf+JrP+Hqf+Env+Krv+Fo/+Pu/+Ms/+Qvv+Hqf+RwP+KsP+Fpf+Mtv+Gov+Bnf+Qv/+Nt/+Krv+Ho/+Rwf+Ouv+Emv+Amv+SxP+Sw/+NuP+Mtf/G0f6huP+Ot/+JrP+Jqv+Dnv+crf6Uqv////+QvP+PvP+Ms//J0/3p9/+Ux/+Ouf+Krf+Iqf+Fpv+/zf6WsP+MpP+RqP+Uyf+Jy//V3P6Yuf+Qqf+Rqv/5/f+Sxf+Jy/////+Lx/+Ouf+Nw/+Owv+PwP+Jr/+Jq/+VvP+Vuv/c4v+Fnf+btP+InP+Blf/3+P6Txf+Jzf+Jyf+NxP+Qwf/t8/6Svv+Tvf/O1f7Czv3T2f6cu/+qvP7a4fvo7v77/v/o9//p9//0+v////+Vy//w9//k8/+B1f/v9/+D0/+UyP/u9v+D0v/i8f+F0v/g7/+G0P+KzP+Hz/////+Lx//s8/+Puf/h7P+Mxv/w9f7q8v/q8f2RwP/r8f6JrP/t8v6RvP/l6f7////j6P6VvP/f5/7q8P7a4P/U2f6au/+ZuP+ewf+auP+iu//n6f2Fn//j6P/h4fn9/v/4/P/3/P/o9v/l9P+F1P+B1f/i8v+UyP+J0f+E0f/h7//r8v6Izf/g7v/q8v6Pv//f7P7f7f/g7f+Lxf+MyP+Mw//k7v6Ow/+Ov//v8/2Pu//t8f+Tvv/p8P6Uu//q7v/i6P2Xvf+WuP/L1vypu//Azv7K0/zy8v/l8v/A4P/o9f/x+f+I0f/j8v+J0P/s9v/h8P+I0P/t9v/r9P6Lyv+Lyf/s9P/g7P+Myv/s8/7j7v+Jrv/q8P2Uwf+Epf+TuP/a3vzh5f3w8P/a4P20v//Nzfzx8f/Pz/Cg0P/f7//u9f/q8v7o8v7s8/7s8v3w9f+Sv/+TuP+Gp//s8fr///8/HFXHAAAA8nRSTlMANUQ/Z2JJXXaKTjCPmVMre3E6gFiylLxsxoVYnk5JwaOFU8utOjrV0KieQS2icWwzMC4Dt7aTQvjfrHprXD0zMyvpvUxGNjH+2sK9raeYkoiAcF5TUi0rKCYY2cy3pIJ/eGpEQDcxLx0S/Pv19PPu7Ovr5+Tk4eDe3NXU09DIsq2opKCViYN9e3V1cmZlXllVTk1GQDs2NTMwJw0K/vn28u/u5+Pj3tjNycjGw8DAua2pqJ6SjYyMf3BvaWNgWk5NSTc3MxT79PHw6efl2trY19PHurWysqWZe2xkXVlUPjo6OSskCO7Qzs6+vKCedmhdN1av0hoAAAV1SURBVEjHjZT3P9RxHMe1nCjcObo4cjpX5w53l7pUbnBGkr2TPZJKmiqVEQlJhGjvvfcm2nvvvXf5C3q/P98bkuR1D7+9n16v1/vzvtPrnAade/ty6anHJfFHOjkfXbe07PGxkuL4oqIjCzoDjHtxurzsRHmFStokjBDG/59JrwurOF2hkkUoIyKEQmFqatG3/xDnXlSGPZcKI5VKiVgsli+vrakpfNAx8UoVlpRWH6mUeMsVcm8vhah6WfXB3A6IlSlVKoE4KjxcgtNGRl1Ayzw9H+Z20DypMVkZZWKiUIi6oHj2PAbPs6Eh/+6/kBUpVUliIEQKGGcwGPbdiBpCQ/O//AMZJ218XW9igoHsGTwY7kopdMmSvTvbz/VGmiyhCARwWJ/Ss5CQ9pl3zVJZJCEwEszb6BtaGxrCn3XIyZP3trW3rybBWTCB1jy0sNGHeWM7+BgzrX4kJu752E57mWA5mIjsMRVxgGkrJpPpRvtJSywt3X2rPUSMuUgqIIzx37vRaLQeqNKEhN03/womg/bYhDJBBzdqvjsqYeHCHdfa1k9BF0QoEyuwoOadWc4sFutoXNzWGW2W3Axd8E3AxAZ6WNGeEoDl7EwPho/T0cDAtswb2Bi6kFx2VkwaDYgRI5zo9EUGRIGHD82e+ufrJ8uo+l31oQogYMJiOdFh2BQ03NTscEDAn8wKgQCeUsRTI8QEMhkYDDc1NTMLMuNwLAP8/a9Pbl0mJQlXhvVtrO2YNLce3Uew6IvAAsYtLS17gvwLCrKR0d3la0DsgdG3NiZVMBZacMh8L9CB2NjsS61eRiCtB4YH/Q21CMQKAgLnh1hYWAyJ3b9/40Qd09woppJhFytAnIPpBmBCCBjvjdrn59eKSU+SRWkZphu40IMBgRpAAMBmO7DZbL/786+s0TIpKqXOhgqGCKcnhOrd28HBlmj+2LFZWia9KjkqnHoa3BmsjG7wKIgDuSzQw9F29Gh+3jDunTseWas1zKtKYbiIsrEjZdAF2iPiYOvIz+Nyuebm5h6+HuvGa2xU0qhwBbkzayzjDO8y3IwgbAdHPp87zNx8sIvLYN/tvhc1TF1lWqSEwaMWgG3ABpIB4sC2HY2Ei0sf0O2YmLWr1CdQGRYp8SK3ic/ZnRWMLqQ+2xGRwUD069dvV8zcuRom+rlA6Y2MbgGmhAGEz4VYSPQF5cyZM6GFYl6eTlN6ixi6aE6PqDLQZRi4EKI/KOfGFjUzqCKsXu6l2RpuAKJxiI1tHhcQJAYOHDhgwOZZs4ZSTHR5lQQYPDW1DS4aELQxdyEIAANGjtk8c6aaqTslk8gVwIAN0w3rAEL2bMtHm12AIOHqenXaNDWztEwo9hKJGHjR6OO0yDSI1IGdoQ0iY0a6Tt+06fKUDRQzqKw8Qlxr1AXrwNqwDvGBA+BrGUDc3d3Xr5+SQZj0E2ERqXIjPAJYNUbD18FoWEeDbHLPzLyQ4ePjQ5i3x1RCubfmpqkjMMNo6KOJ5uqe+f58C9GoaD29XyVSYS1h4DftKeWDDN4AbACZMZAsExEKghWUNKXWhlPfA2P1qjmUT556a9jmQotWi/VOFael1lR7ep4JfRZy8nhpwtG4wMMB/gdi9/nNH+vhezsmJ+fG5quX12fomHl6J+KFy88uA2RJyJPE4wkL4wIPBfgXxO5HxGN7zNw5W2bNnLZhio+OmaR3LD6tplrLfKeYAwX7/O6Dje/2dpniwuKiwoMHH+bn7723Z8/uHTu2fpg9+3p29sYrWVnr1l1cO2HCUFCGT+tshUcWLPj6IDf37ued27Z9unXz2owZU6dOnnxp4sQ1q1ePH79KN6vbQWc1SrfrTit6lO5NO6/F8yZNmofBfgNTwRQLsPLsHQAAAABJRU5ErkJggg==";
export {
  v as CAMERA_IMAGE
};