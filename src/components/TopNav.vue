<template>
    <div class="nav-wrap">
        <div class="header">
            <img src="../assets/phone_meau.png" class="menu" @click="dealClick"/>
            <img src="../assets/logo.png" class="logo"/>
            <ul>
                <li>首页</li>
                <li>叮咚一下</li>
                <li>BLOG</li>
                <li>个人中心</li>
                <li>留言板</li>
            </ul>
            <div>
                <img src="../assets/icon1.png" class="message"/>
                <i>1</i>
                <span>0件</span>
            </div>
            <span>登录</span>
            <i></i>
            <span>注册</span>
        </div>
        <div class="header2">
            <ul>
                <li>首页</li>
                <li>叮咚一下</li>
                <li>BLOG</li>
                <li>个人中心</li>
                <li>留言板</li>
            </ul>
            <div>
                <span>登录</span>
                <span>注册</span>
            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
    name:"top-nav",
    methods:{
        dealClick(){
            if(!$(".header2").is(":animated")){
                if($(".header2").hasClass("active")){
                    $(".header2").animate({"height":"0px"},500);
                    $(".header2").removeClass("active");
                }else{
                    var height = $(".header2").css("height","auto").height();
                    $(".header2").animate({"height":"0px"},0);
                    $(".header2").animate({"height":height+"px"},500);
                    $(".header2").addClass("active");
                }
            }
        }
    }
}
</script>

<style scoped lang="less">
.nav-wrap{
    width: 100%;
    padding: 1.3rem 3rem;
    background-color: #121111;
}
@media screen and (max-width: 800px){
    .nav-wrap{
        position: relative;
        padding: 2rem 1rem;
        .header2{
            width: 100%;
            height: 0px;
            overflow: hidden;
            ul{
                list-style: none;
                margin-top: 1rem;
                li{
                    color: #fff;
                    text-align: center;
                    padding: 1rem 0;
                    cursor: pointer;
                    font-size: 1rem;
                }
                li:hover{
                    background-color: #AC0819;
                }
            }
            div{
                display: flex;
                span{
                    color: #fff;
                    display: inline-block;
                    text-align: center;
                    width: 50%;
                    padding: 1rem 2rem;
                    font-size: 1.3rem;
                    cursor: pointer;
                }
                span:nth-child(1){
                    border-right: 1px solid #fff;
                }
            }
        }
        .header{
            img.menu{
                display: inline-block;
                max-width: 27px;
                cursor: pointer;
            }
            img.logo{
                position: absolute;
                top: 40px;
                left: 50%;
                transform: translate(-50%,-50%);
            }
            ul{
                display: none;
            }
            span{
                display: none;
            }
            i{
                display: none;
            }
            div{
                display: inline-block;
                float: right;
                position: relative;
                cursor: pointer;
                span{
                    display: none;
                }
                i{
                    color: #fff;
                    font-style: normal;
                    display: inline-block;
                    width: 20px;
                    height: 20px;
                    border-radius: 50%;
                    background-color: #E60012;
                    text-align: center;
                    line-height: 20px;
                    position: absolute;
                    right: -10px;
                    top: -10px;
                }
            }
        }
    }
}
@media screen and (min-width: 801px) and (max-width: 919px){
    .nav-wrap{
        .header2{
            display: none;
        }
        .header{
            img.menu{
                display: none;
            }
            img.logo{
                float: left;
            }
            ul{
                color: #fff;
                list-style: none;
                li{
                    float: left;
                    line-height: 2rem;
                    font-size: 1rem;
                    margin: 0 1.5rem;
                    cursor: pointer;
                }
            }
            span{
                display: none;
            }
            i{
                display: none;
            }
            div{
                display: none;
            }
        }
    }
    .nav-wrap::after{
        display: block;
        content: "";
        clear: both;
        height: 0;
        overflow: hidden;
        visibility: hidden;
    }
}
@media screen and (min-width: 920px){
    .nav-wrap{
        .header2{
            display: none;
        }
        .header{
            img.menu{
                display: none;
            }
            img.logo{
                float: left;
            }
            ul{
                color: #fff;
                list-style: none;
                li{
                    float: left;
                    line-height: 2rem;
                    font-size: 1rem;
                    margin: 0 1.5rem;
                    cursor: pointer;
                }
            }
            span{
                display: inline-block;
                float: right;
                color: #fff;
                margin: 0.3rem 0.8rem;
                font-size: 1rem;
                cursor: pointer;
            }
            i{
                width: 1px;
                height: 20px;
                background: #fff;
                display: inline-block;
                float: right;
                margin-top: 0.5rem;
            }
            div{
                display: inline-block;
                float: right;
                margin-left: 0.2rem;
                cursor: pointer;
                img.message{
                    margin-top: 0.4rem;
                }
                span{
                    color: #fff;
                    display: inline-block;
                    margin-left: 0.3rem;
                }
                i{
                    display: none;
                }
            }
        }
    }
    .nav-wrap::after{
        display: block;
        content: "";
        clear: both;
        height: 0;
        overflow: hidden;
        visibility: hidden;
    }
}
</style>