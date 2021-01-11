<template>
<div>
<div class="big">
    <div class="top">
        <h1>商品列表</h1>
    </div>
    <div class="center">
        <span>商品名称：</span>
        <el-input v-model="inp" class="inp" placeholder="请输入内容"></el-input>
        <span>商品类型：</span>
         <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <br>
        <button class="but but1" @click="Search">查询</button>
        <button class="but but2" @click="clear">清空</button>
    </div>
    <div class="bom">
        <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
            prop="id"
            label="id"
            width="180">
        </el-table-column>
        <el-table-column
            prop="name"
            label="商品姓名"
            width="180">
        </el-table-column>
        <el-table-column
            prop="state"
            label="状态">
        </el-table-column>
        <el-table-column
            prop="stock"
            label="库存">
        </el-table-column>
        <el-table-column
            prop="time"
            label="创建日期">
        </el-table-column>
        <el-table-column
            prop="sold"
            label="已售">
        </el-table-column>
        <el-table-column
            prop="price"
            label="基价">
        </el-table-column>
        <el-table-column
            prop="opt"
            label="操作">
        </el-table-column>
        </el-table>
    </div>

</div>
</div>
</template>
<script>
export default {
    data() {
      return {
        options: [{
          value: '选项1',
          label: '大米'
        }, {
          value: '选项2',
          label: '玉米'
        }, {
          value: '选项3',
          label: '小麦'
        }],
        value: '',
        tableData: [{
            id: '1',
            name: '大米',
            state: '上架',
            stock: '120',
            time: '2021-12-04',
            sold: '80',
            price: '12',
            opt: '编辑    详情'
          },
          {
            id: '2',
            name: '玉米',
            state: '下架',
            stock: '120',
            time: '2021-12-04',
            sold: '80',
            price: '12',
            opt: '编辑    详情'
          },
          {
            id: '3',
            name: '小麦',
            state: '上架',
            stock: '120',
            time: '2021-12-04',
            sold: '80',
            price: '12',
            opt: '编辑    详情'
          }],
          searchData: [],
          inp: ''
      }
    },
    methods: {
        Search(){
            this.searchData = this.tableData
            var search = this.inp;
            if(search){
                this.tableData = this.tableData.filter(function(product){
                    return Object.keys(product).some(function(key){
                        return String(product[key])
                        .toLowerCase()
                        .indexOf(search) > -1
                    })
                })
            }
        },
        clear(){
            this.inp = '';
            this.tableData = this.searchData
        }
    }
    
}
</script>
<style lang="less" scoped>
.big{
    width: 100%;
    height: 100%;
}
.top{
    width: 100%;
    height: 50px;
    line-height: 50px;
    h1{
        margin-left: 250px;
        font-size: 20px;
    }
}
.center{
    height: 100px;
    margin-left: 300px;
    position: relative;
    .inp{
        width: 200px;
        margin-right: 100px;
    }
    .but{
        width: 50px;
        height: 30px;
    }
    .but1{
        position: absolute;
        bottom: 0;
        right: 300px;
    }
    .but2{
        position: absolute;
        bottom: 0;
        right: 500px;
    }
}
.bom{
    width: 80%;
    float: right;
}
</style>