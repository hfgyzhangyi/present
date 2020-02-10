<template>
    <div class="template">
        <top-nav></top-nav>
        <div class="content-wrap">
            <ul>
                <li><img src="../assets/pro_pic1.png"/></li>
                <li><img src="../assets/pro_pic2.png"/></li>
                <li><img src="../assets/pro_pic3.png"/></li>
                <li><img src="../assets/pro_pic4.png"/></li>
                <li><img src="../assets/pro_pic3.png"/></li>
                <li><img src="../assets/pro_pic4.png"/></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
*{
    margin: 0;
    padding: 0;
}
@media screen and (max-width: 1119px){
    .template{
        .content-wrap{
            width: 100%;
            margin: 0 auto;
            ul{
                width: 100%;
                li{
                    width: 96%;
                    margin: 2%;
                    img{
                        width: 100%;
                    }
                }
            }
        }
    }
}
@media screen and (min-width: 1120px){
    .template{
        .content-wrap{
            width: 1100px;
            margin: 0 auto;
            ul{
                list-style: none;
                width: 100%;
                li{
                    width: 49%;
                    float: left;
                    margin-top: 2%;
                    img{
                        width: 100%;
                    }
                }
                li:nth-child(odd){
                    margin-right: 2%;
                }
            }
        }
    }
}
</style>