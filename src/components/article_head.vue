<template>
    <div class="article_head">
        <div class="article_wrap">
            <div class="back">🔙Assignments</div>
            <ul>
                <li><span>字体</span></li>
                <li><span>段落</span></li>
                <li><span>高亮</span></li>
                <li><span>分屏</span></li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss">
    .article_head{
        .back{
            height: 70px;
            line-height: 70px;
        }

        ul{
            display: flex;
            justify-content: space-between;
            width: 300px;
            padding: 13px 0 0 0;
            li{
                span{
                    display: inline-block;
                    border: 1px solid #e4e7ed;
                    border-radius: 4px;
                    padding: 10px 15px;
                    background: #fff;
                    font-size: 14px;
                }
            }
        }
    }

   
</style>
