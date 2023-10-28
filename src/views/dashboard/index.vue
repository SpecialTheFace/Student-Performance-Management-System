<template>
  <div class="dashboard-container">
    <h2>LittleSnail 出品</h2>
    <div id="EChart" style="width: 70vw; height: 70vh;"></div>
    <div id="EChart2" style="width: 70vw; height: 70vh;"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name : 'Dashboard' ,
  computed : {
    ... mapGetters ( [
      'name'
    ] )
  } ,
  mounted () {
    this.getRenderer1 ()
    this.getRenderer2 ()
  } ,
  methods : {
    getRenderer1 () {
      // 基于准备好的dom，初始化echarts实例
      let EChart = this.$echarts.init ( document.getElementById ( "EChart" ) );
      // 配置参数
      let config = {
        legend : {
          top : 'bottom'
        } ,
        toolbox : {
          show : true ,
          feature : {
            mark : { show : true } ,
            dataView : { show : true , readOnly : false } ,
            restore : { show : true } ,
            saveAsImage : { show : true }
          }
        } ,
        series : [
          {
            name : 'Nightingale Chart' ,
            type : 'pie' ,
            radius : [ 50 , 250 ] ,
            center : [ '50%' , '50%' ] ,
            roseType : 'area' ,
            itemStyle : {
              borderRadius : 8
            } ,
            data : [
              { value : 40 , name : 'rose 1' } ,
              { value : 38 , name : 'rose 2' } ,
              { value : 32 , name : 'rose 3' } ,
              { value : 30 , name : 'rose 4' } ,
              { value : 28 , name : 'rose 5' } ,
              { value : 26 , name : 'rose 6' } ,
              { value : 22 , name : 'rose 7' } ,
              { value : 18 , name : 'rose 8' }
            ]
          }
        ]
      };
      // 设置参数
      EChart.setOption ( config );
    } ,
    getRenderer2 () {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init ( document.getElementById ( "EChart2" ) );
      // 配置参数
      let option;

      let xAxisData = [];
      let data1 = [];
      let data2 = [];
      let data3 = [];
      let data4 = [];
      for ( let i = 0 ; i<10 ; i++ ) {
        xAxisData.push ( 'Class' + i );
        data1.push ( +( Math.random () * 2 ).toFixed ( 2 ) );
        data2.push ( +( Math.random () * 5 ).toFixed ( 2 ) );
        data3.push ( +( Math.random () + 0.3 ).toFixed ( 2 ) );
        data4.push ( +Math.random ().toFixed ( 2 ) );
      }
      const emphasisStyle = {
        itemStyle : {
          shadowBlur : 10 ,
          shadowColor : 'rgba(0,0,0,0.3)'
        }
      };
      option = {
        legend : {
          data : [ 'bar' , 'bar2' , 'bar3' , 'bar4' ] ,
          left : '10%'
        } ,
        brush : {
          toolbox : [ 'rect' , 'polygon' , 'lineX' , 'lineY' , 'keep' , 'clear' ] ,
          xAxisIndex : 0
        } ,
        toolbox : {
          feature : {
            magicType : {
              type : [ 'stack' ]
            } ,
            dataView : {}
          }
        } ,
        tooltip : {} ,
        xAxis : {
          data : xAxisData ,
          name : 'X Axis' ,
          axisLine : { onZero : true } ,
          splitLine : { show : false } ,
          splitArea : { show : false }
        } ,
        yAxis : {} ,
        grid : {
          bottom : 100
        } ,
        series : [
          {
            name : 'bar' ,
            type : 'bar' ,
            stack : 'one' ,
            emphasis : emphasisStyle ,
            data : data1
          } ,
          {
            name : 'bar2' ,
            type : 'bar' ,
            stack : 'one' ,
            emphasis : emphasisStyle ,
            data : data2
          } ,
          {
            name : 'bar3' ,
            type : 'bar' ,
            stack : 'two' ,
            emphasis : emphasisStyle ,
            data : data3
          } ,
          {
            name : 'bar4' ,
            type : 'bar' ,
            stack : 'two' ,
            emphasis : emphasisStyle ,
            data : data4
          }
        ]
      };
      myChart.on ( 'brushSelected' , function ( params ) {
        const brushed = [];
        const brushComponent = params.batch[ 0 ];
        for ( let sIdx = 0 ; sIdx<brushComponent.selected.length ; sIdx++ ) {
          const rawIndices = brushComponent.selected[ sIdx ].dataIndex;
          brushed.push ( '[Series ' + sIdx + '] ' + rawIndices.join ( ', ' ) );
        }
        myChart.setOption ( {
          title : {
            backgroundColor : '#333' ,
            text : 'SELECTED DATA INDICES: \n' + brushed.join ( '\n' ) ,
            bottom : 0 ,
            right : '10%' ,
            width : 100 ,
            textStyle : {
              fontSize : 12 ,
              color : '#fff'
            }
          }
        } );
      } );

      option && myChart.setOption ( option );
    } ,

  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;

    #EChart {
      margin-bottom: 150px;
    }
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
