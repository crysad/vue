<template>
<div>
        <div class="bootomR">
        <div class="bootomR-l">
            <img v-lazy="msg.avatar" alt="">
            <span>{{msg.nickname}}</span>
            <h4>{{msg.title}}</h4>
            <p>{{msg.subTitle}}</p>
        </div>
        <div class="bootomR-r">
              <img v-lazy="msg.picUrl" alt="">
              <span class="tname">{{msg.typeName}}</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
  props: ['msg']
}
</script>

<style scoped>
.bootomR{
    width: 335px;
    height: 136px;
    border: 1px solid #eee;
    margin: 15px auto 0;
    display: flex;
}
.bootomR .bootomR-l{
    flex: 1;
    padding: 10px
}
.bootomR .bootomR-l img{
    width: 24px;
    height: 24px;
    border-radius: 50%;
    vertical-align: middle;
}
.bootomR .bootomR-l span{
    display:inline-block;
    margin: 0 0 0 5px;
    font-size: 12px;
height: 24px;
line-height: 24px;
}
.bootomR .bootomR-l h4{
    width: 150px;
    height: 16px;font-size: 16px;
    margin: 10px 0;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.bootomR .bootomR-l p{
    width: 150px;
    height: 21px;
    font-size: 14px;
    line-height: 21px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.bootomR .bootomR-r{
    width: 134px;
    position: relative;
}
.bootomR .bootomR-r img{
    width: 100%;
}
.bootomR .bootomR-r .tname{
    position: absolute;
    top: 10px;
    left: 10px;
    display: block;
    width: 88px;
    height: 18px;
    font-size: 12px;
    text-align: center;
    line-height: 18px;
    border-radius: 5px;
    background: #fff;
}
</style>
