<template>
      <div id="app">
        <transition name="fade">
            <!-- <keep-alive> -->
                <router-view/>
            <!-- </keep-alive> -->
        </transition>
      </div>
</template>
<style >
	html,body,#app,.app-wrapper {
		height:100%;
		width:100%;
  }
  
  * {
      padding: 0;
      margin: 0;
  }

/* Make clicks pass-through */
#nprogress {
  pointer-events: none;
}

#nprogress .bar {
  background: red;
  position: fixed;
  z-index: 1031;
  top: 0;
  left: 0;

  width: 100%;
  height: 2px;
}

/* Fancy blur effect */
#nprogress .peg {
  display: block;
  position: absolute;
  right: 0px;
  width: 100px;
  height: 100%;
  -webkit-box-shadow: 0 0 10px red, 0 0 5px red;
          box-shadow: 0 0 10px red, 0 0 5px red;
  opacity: 1.0;

  -webkit-transform: rotate(3deg) translate(0px, -4px);
          transform: rotate(3deg) translate(0px, -4px);
}







.el-header {
  padding: 0 !important; 
}



.el-tooltip__popper {
    position: absolute;
    border-radius: 4px;
    padding: 10px;
    z-index: 2000;
    font-size: 12px;
    line-height: 1.2;
    min-width: 10px
}

.el-tooltip__popper .popper__arrow,
.el-tooltip__popper .popper__arrow::after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
    content: ""
}

.el-tooltip__popper .popper__arrow::after {
    content: " ";
    border-width: 5px
}
.el-tooltip__popper[x-placement^=right] {
    margin-left: 12px
}

.el-tooltip__popper[x-placement^=right] .popper__arrow {
    left: -6px;
    border-right-color: #303133;
    border-left-width: 0
}

.el-tooltip__popper[x-placement^=right] .popper__arrow::after {
    bottom: -5px;
    left: 1px;
    border-right-color: #303133;
    border-left-width: 0
}

.el-tooltip__popper.is-dark {
    background: #303133;
    color: #fff
}

.el-tooltip__popper.is-dark {
    background: #303133;
    color: #fff;
}


.el-menu {
    height: 100%;
  }

</style>

