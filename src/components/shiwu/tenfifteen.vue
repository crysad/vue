<template>
    <div class="tenfif">
        <h2>十点一刻</h2>
        <div class="cover">
            <div class="cont">
                <li class="lis" v-for="(item,index) in data" :key="index">
                    <div class="suvTitle">今日话题</div>
                    <div class="title">{{item.title}}</div>
                    <div class="question">{{item.desc}}</div>
                    <div class="jion"><img :src="imgs" alt="" v-for="(imgs,index) in item.participantAvatar" :key="index">{{item.participantNum}}人参与话题</div>
                </li>
            </div>
        </div>
    </div>
</template>

<script>
import data from '@/mock/data/shiwu_data.json'
export default {
  created () {
    this.data = data.tenfifteen
  }
}
</script>

<style scoped>
 .tenfif h2{
    width: 335px;
    height: 67.5px;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    line-height: 67.5px;
    margin: 0 auto
}
.tenfif .cover{
    width: 375px;
    height: 230px;
    overflow-x: scroll
}
::-webkit-scrollbar {
/* 隐藏滚轮 */
display: none;
}
.tenfif .cover .cont{
    height: 100%;
    width: 1000px;
    display: flex;
    justify-content:space-evenly
}
.tenfif .cover .cont .lis{
    width: 300px;
    height: 230px;
    background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkQAAAGbBAMAAADXTpIOAAAAHlBMVEUAAADn5+fr6+vn5+fo6Ojr6+vm5ubo6Ojy8vL6+vrAm3THAAAABnRSTlMAQEvA0ONT1GB5AAACbUlEQVR42u3T0QlCQRRDwW3JFuzAJrYVa7Bbf0UeROFdxDCngcBA1lZoIUCECBEiRIgQCdE3RA8dhggRIkSIECFCJESIECFChAgRIiFChAgRIkSIEAkRIkSIECFChAgRIkSIECFChAgRIkSIECFChAiRECFChAgRIkSIhAgRIkSIECFCJESIECFChAgRIiFChAgRIkSIECFChAgRIkSIEAkRIkSIECFChEiIECFChAgRIkRChAgRIkSIECESIkSIECFChAgRIkSIECFChAgRIkSIECFChAgRIiFChAgRIkSIEAkRIkSIECFChEiIECFChAgRIkRChAgRIkSIECFChAgRIkSIECESIkSIECFChAiRECFChAgRIkSIhAgRIkSIECFCJESIECFChAgRIkSIECFChAgRIkSIECFChAgRIkRChAgRIkSIECESIkSIECFChAiRECFChAgRIkSIhAgRIkSIECFChAgRIkSIECFCJESIECFChAgRIiFChAgRIkSIEAkRIkSIECFChEiIECFChAgRIkSIECFChAgRIkSIECFChAgRIkSIhAgRIkSIECFCJESIECFChAgRIiFChAgRIkSIEAkRIkSIECFChAgRIkSIECFChEiIECFChAgRIkRChAgRIkSIECESIkSIfkd0Tkcj9/33DRMVCA0TNQjNElUIjRJ1CE0SlQgNErUIzRHVCI0R9QhNERUJ7XVOb0QvQpelAyJCiYhQIiKUiAglIkKJiFAiIpSICCUiQomIUCQi9DkRoUREKBERSkSEEhGhREQoERFKRIQSEaFERCgREUpEhBLRDUIgujIINb/sCeTQbvXhK7c0AAAAAElFTkSuQmCC) no-repeat;
    background-size: 100% 100%;
}
.tenfif .cover .cont .lis .suvTitle{
    width: 80px;height: 20px;margin: 20px auto;font-size: 14px;text-align: center;line-height: 20px;color: #333;position: relative;
}
.suvTitle::before{
    position: absolute;
    left: -10%;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    display: block;
    height:2px;
    width: 18px;
    background-color: #7f7f7f;
}
.suvTitle::after{
    position: absolute;
    right:-10%;
    top: 50%;
    transform: translateY(-50%);
    content: '';
    display: block;
    height:2px;
    width: 18px;
    background-color: #7f7f7f;
}
.tenfif .cover .cont .lis .title{
    width: 250px;height: 18px;margin: 0 auto;font-size: 18px;font-weight:800; text-align: center;line-height: 18px;margin-bottom: 13px
}
.tenfif .cover .cont .lis .question{
    width: 250px;height: 21px;margin: 0 auto;font-size: 14px;text-align: center;line-height:21px;
}
.tenfif .cover .cont .lis img{
    width: 24px; height: 24px;border-radius: 50%
}
.tenfif .cover .cont .lis .jion{
     width: 180px;height: 24px;margin: 0 auto;font-size: 12px;text-align: center;line-height:24px;margin-top: 30px
}
</style>
