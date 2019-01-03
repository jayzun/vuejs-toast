<template>
    <div :class="mask ? 'mask' : ''" v-show="state">
        <div :class="state ? 'toast fade-in' : 'toast'" ref="toast">
            <img v-if="type === 'success'" class="toast__img" src="../assets/images/check-circle.svg" alt="">
            <img v-else-if="type === 'fail'" class="toast__img" src="../assets/images/close-circle.svg" alt="">
            <img v-else-if="type === 'info'" class="toast__img" src="../assets/images/info-circle.svg" alt="">
            <div class="toast__text" v-html="text"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'vuejs-toasts',
        data() {

            return {
                state: false,
                type: 'normal',
                text: undefined,
                duration: 2000,
                callback: undefined,
                mask: true
            }
        },
        watch: {
            state(curVal, preVal) {

                let duration = parseInt(this.duration);

                if (curVal) {
                    //根据duration设置的时间，toast自动消失
                    if (!isNaN(duration)) {
                        setTimeout(() => {
                            this.state = false;
                            window.$isToast = false;
                        }, duration);
                    }
                } else if (preVal) {
                    if (typeof this.callback === 'function') {
                        this.callback();
                    }
                }
            }
        },
    }
</script>

<style scoped lang="less">
    .mask {
        position: absolute;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .toast {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 50px;
        max-width: 50%;
        // min-height: 50px;
        color: #fff;
        font-size: 0;
        text-align: center;
        border-radius: 5px;
        background: rgba(0, 0, 0, 0.7);
        transform: translate(-50%, -50%);
        padding: 10px;

        .toast__img {
            margin-bottom: 10px;
            width: 50px;
            height: 50px;
        }

        .toast__text {
            white-space: wrap;
            font-size: 14px;
        }
    }

    .fade-in {
        animation: fadeIn 0.2s linear;
        animation-fill-mode: forwards;
    }

    @keyframes fadeIn {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 100%;
        }
    }
</style>