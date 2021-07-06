<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core"
import PullUp from "@better-scroll/pull-up"
import ObserveDom from '@better-scroll/observe-dom'
import ObserveImage from '@better-scroll/observe-image'
import MouseWheel from '@better-scroll/mouse-wheel'

export default {
    props: {
        probeType: {
            type: Number,
            default: 0
        },
        pullUpLoad: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            bscroll: null
        }
    },
    mounted() {
        this.init();
    },
    methods: {
        init() {
            BScroll.use(PullUp);
            BScroll.use(ObserveDom);
            BScroll.use(ObserveImage);
            BScroll.use(MouseWheel);
            this.bscroll = new BScroll(this.$refs.wrapper, {
                probeType: this.probeType,
                pullUpLoad: this.pullUpLoad,
                click: true,
                observeDOM: true,
                observeImage: true,
                mouseWheel: {
                    speed: 20,
                    invert: false,
                    easeTime: 300
                }
            });
            if (this.probeType != 0) {
                this.bscroll.on('scroll', (position) => {
                // console.log(position);
                this.$emit('scroll',position);
            })
            }
            if(this.pullUpLoad) {
                this.bscroll.on('pullingUp', () => {
                // console.log("上拉加载更多");
                this.$emit('pullingUp');
                setTimeout(() => {
                    this.bscroll.finishPullUp();
                }, 2000);          
                })
            }
            // console.log(bscroll);
            this.bscroll.refresh();
        },
        scrollTo(x, y, time=300) {
            this.bscroll.scrollTo(x, y, time, undefined);
        },
        scrollToElement(el, time, offsetX, offsetY) {
            this.bscroll.scrollToElement(el, time, offsetX, offsetY);
        }
    }

}
</script>

<style scoped>
    
</style>