// var _proContent = `<section class="mobilePages">
// <div class="mobileTable">
// <table class="table tableMobile">
//   <thead>
//     <tr>
//       <th><div class="circleMo"></div><p>丽王牌号</p></th>
//       <th><div class="circle"></div><p>LW-3002W-A</p></th>
//       <th><div class="circle"></div><p>LW-3002W-A</p></th>
//       <th><div class="circle"></div><p>LW-3002W-A</p></th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td>中文名称</td>
//       <td>永固红F2R<br>W-B</td>
//       <td>永固红F2R<br>W-B</td>
//       <td>永固红F2R<br>W-B</td>
//     </tr>
//      <tr>
//       <td>索引号</td>
//       <td>PR2</td>
//       <td>PR2</td>
//       <td>PR2</td>
//     </tr>
//      <tr>
//       <td>结构索引号</td>
//       <td>6041-97-7</td>
//       <td>6041-97-7</td>
//       <td>6041-97-7</td>
//     </tr>
//      <tr>
//       <td>吸油量</td>
//       <td>45-50</td>
//       <td>45-50</td>
//       <td>45-50</td>
//     </tr>
//      <tr>
//       <td>PH</td>
//       <td>6-7</td>
//       <td>6-7</td>
//       <td>6-7</td>
//     </tr>
//      <tr>
//       <td>耐温</td>
//       <td>180</td>
//       <td>180</td>
//       <td>180</td>
//     </tr>
//      <tr>
//       <td>耐光</td>
//       <td>6</td>
//       <td>6</td>
//       <td>6</td>
//     </tr>
//      <tr>
//       <td>耐候</td>
//       <td>3-4</td>
//       <td>3-4</td>
//       <td>3-4</td>
//     </tr> <tr>
//       <td>耐酸</td>
//       <td>5</td>
//       <td>5</td>
//       <td>5</td>
//     </tr> <tr>
//       <td>耐碱</td>
//       <td>5</td>
//       <td>5</td>
//       <td>5</td>
//     </tr>
//      <tr>
//       <td>耐乙醇</td>
//       <td>3</td>
//       <td>3</td>
//       <td>3</td>
//     </tr>
//      <tr>
//       <td>耐迁移性</td>
//       <td>3</td>
//       <td>3</td>
//       <td>3</td>
//     </tr>
//      <tr>
//       <td>性能特点</td>
//       <td>蓝相不掺色</td>
//       <td>蓝相不掺色</td>
//       <td>蓝相不掺色</td>
//     </tr>
//   </tbody>
// </table>
// </div>
//
//       <div id="pageGro">
//         <div class="pageUp">< 上一页</div>
//         <div class="pageList">
//             <ul>
//                 <li>1</li>
//                 <li>2</li>
//                 <li>3</li>
//                 <li>4</li>
//                 <li>5</li>
//             </ul>
//         </div>
//         <div class="pageDown">下一页 ></div>
//     </div>
// </section>`;
function GetQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}


$(function () {
    // 返回顶部
    $('.GoTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 500);
    })

//头部选中
//     $('.activePro').siblings('.logoIcon').addClass('unShow');
    var _value = sessionStorage.getItem("dataType");
    $('.talTop>div>a').click(function () {
        $(this).addClass('activePro').parent().siblings().find('a').removeClass('activePro');
        // $(this).siblings('.logoIcon').addClass('unShow')
        // $(this).parent().siblings().find('.logoIcon').removeClass('unShow')
    });
    //选中出现图标跟下边线
    $('.talTop>div>a').hover(function () {
        // $(this).addClass('activePro-1');
        $(this).siblings('.logoIcon').addClass('unShow-1')
        $(this).siblings('.talTopNav').addClass('show')
    }, function () {
        // $(this).removeClass('activePro-1');
        $(this).siblings('.talTopNav').removeClass('show')
        $(this).siblings('.logoIcon').removeClass('unShow-1')

    })
    $('.talTopNav').hover(function () {
        $(this).addClass('show')
    }, function () {
        $(this).removeClass('show')
    })
});


var _printersInk = [
    {
        id: 1,
        number: "LW-3002W-A",
        name: "永固红F2R W-A	",
        indexs: "	P.R.2	",
        structure: "	6041-94-7	",
        blotter: "	45-50	",
        PH: "	6-7	",
        heatproof: "	180	",
        light: "	6	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	3	",
        removal: "	3	",
        trait: "	蓝相，不渗色	",
        color: "#c01920",
        En: "	Ｂluish,No bleeding 	"
    },
    {
        id: 2,
        number: "LW-3022W-A",
        name: "耐晒亮红 W-A	",
        indexs: "	P.R.22	",
        structure: "	6448-95-9 	",
        blotter: "	35-52	",
        PH: "	6-7	",
        heatproof: "	160	",
        light: "	6	",
        climate: "	 3-4	",
        acidproof: "	4	",
        resisting: "	4	",
        alcohol: "	3	",
        removal: "	3	",
        trait: "	黄相，不渗色	",
        color: "#c7171e",
        En: "	Yellowish,No bleeding	"
    },
    {
        id: 3,
        number: "LW-3481W-A",
        name: "耐晒大红BBN W-A	",
        indexs: "	P.R.48：1	",
        structure: "	7585-41-3	",
        blotter: "	40-50	",
        PH: "	7-8	",
        heatproof: "	240	",
        light: "	6	",
        climate: "	3	",
        acidproof: "	4	",
        resisting: "	4	",
        alcohol: "	3	",
        removal: "	5	",
        trait: "	黄相，通用型	",
        color: "#bf1a20",
        En: "	Ｙellowish  Good resistance	"
    },
    {
        id: 4,
        number: "LW-3482W-A",
        name: "耐晒艳红BBC W-A	",
        indexs: "	P.R.48：2	",
        structure: "	5281-4-9	",
        blotter: "	40-50	",
        PH: "	7-8	",
        heatproof: "	230	",
        light: "	7	",
        climate: "	6-7	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	 4-5	",
        removal: "	5	",
        trait: "	蓝相，高色力，高光泽	",
        color: "#ba1b21",
        En: "	Bluish  High strength   High gloss	"
    },
    {
        id: 5,
        number: "LW-3483W-A",
        name: "耐晒红大BBS W-A	",
        indexs: "	P.R.48：3	",
        structure: "	15782-05-5	",
        blotter: "	43-50	",
        PH: "	7-8	",
        heatproof: "	230	",
        light: "	7	",
        climate: "	6-7	",
        acidproof: "	4	",
        resisting: "	5	",
        alcohol: "	 4-5	",
        removal: "	5	",
        trait: "	高色力，低粘度	",
        color: "#cf161b",
        En: "	High strength,Low viscosity	"
    },
    {
        id: 6,
        number: "LW-3491W-A",
        name: "立索尔大红 W-A	",
        indexs: "	P.R.49：1	",
        structure: "	1103-38-4	",
        blotter: "	40-55	",
        PH: "	7-8	",
        heatproof: "	160	",
        light: "	6	",
        climate: "	 3-4	",
        acidproof: "	4	",
        resisting: "	4	",
        alcohol: "	3	",
        removal: "	4	",
        trait: "	黄相，低黏度，贮存稳定性好	",
        color: "#c01922",
        En: "	Yellowish,Low viscosity,Good stability	"
    },
    {
        id: 7,
        number: "LW-3571W-A",
        name: "立索尔宝红 W-A	",
        indexs: "	P.R.57：1	",
        structure: "	 5281-04-9	",
        blotter: "	35-50	",
        PH: "	7-8	",
        heatproof: "	190	",
        light: "	 5-6 	",
        climate: "	 3-4	",
        acidproof: "	4	",
        resisting: "	4	",
        alcohol: "	4	",
        removal: "	4	",
        trait: "	蓝相，透明，贮存稳定性好	",
        color: "#a91f24",
        En: "	Bluish,Transparent,Good stability	"
    },
    {
        id: 8,
        number: "LW-3146W-A",
        name: "永固桃红 W-A	",
        indexs: "	P.R.146	",
        structure: "	5280-68-2	",
        blotter: "	65-70	",
        PH: "	7-8	",
        heatproof: "	200	",
        light: "	 7-8	",
        climate: "	 4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	4	",
        removal: "	3-4	",
        trait: "	黄相	",
        color: "#ba1c22",
        En: "	Yellowish	"
    },
    {
        id: 9,
        number: "LW-3146S-A",
        name: "永固桃红 S-A	",
        indexs: "	P.R.146	",
        structure: "	5280-68-2	",
        blotter: "	65-70	",
        PH: "	7-8	",
        heatproof: "	200	",
        light: "	 7-8	",
        climate: "	 4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	5	",
        removal: "	5	",
        trait: "	蓝相，不迁移，耐蒸煮	",
        color: "#b21e23",
        En: "	Bluish,Non-migration,Boiling resistence	"
    },
    {
        id: 10,
        number: "LW-3170-A",
        name: "永固红F5RK -A	",
        indexs: "	P.R.170	",
        structure: "	2786-76-7	",
        blotter: "	45-55	",
        PH: "	6-7	",
        heatproof: "	230	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	4	",
        removal: "	4	",
        trait: "	蓝相，不含APEO	",
        color: "#bf1a20",
        En: "	Bluish,Non-migration,Without APEO	"
    },
    {
        id: 11,
        number: "LW-3266-A",
        name: "永固红F7RK -A	",
        indexs: "	P.R170 F7RK	",
        structure: "	2786-76-7	",
        blotter: "	45-55	",
        PH: "	6-7	",
        heatproof: "	180	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	4	",
        removal: "	4	",
        trait: "	蓝相，不迁移，透明	",
        color: "#a71f24",
        En: "	Bluish,Non-migration,Tansparent	"
    },
    {
        id: 12,
        number: "LW-4012W-A",
        name: "联苯胺黄G W-A	",
        indexs: "	P.Y.12	",
        structure: "	6358-85-6	",
        blotter: "	40-50	",
        PH: "	6-7	",
        heatproof: "	190	",
        light: "	6	",
        climate: "	3	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	4	",
        removal: "	3-4	",
        trait: "	绿相，半透明，通用性强	",
        color: "#f4c51c",
        En: "	Greenish,Semitransparent,Universal	"
    },
    {
        id: 13,
        number: "LW-4012W-B",
        name: "联苯胺黄 W-B	",
        indexs: "	P.Y.12	",
        structure: "	6358-85-6	",
        blotter: "	40-50	",
        PH: "	6-7	",
        heatproof: "	190	",
        light: "	6	",
        climate: "	3	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	4	",
        removal: "	3-4	",
        trait: "	红相，透明，通用性强	",
        color: "#f5c51e",
        En: "	Reddish，Transparent，Universal	"
    },
    {
        id: 14,
        number: "LW-4013W-D",
        name: "永固黄GR W-D	",
        indexs: "	P.Y.13	",
        structure: "	5102-83-0	",
        blotter: "	40-50	",
        PH: "	6-7	",
        heatproof: "	200	",
        light: "	6-7	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	5	",
        removal: "	4	",
        trait: "	绿相，半透明	",
        color: "#f5b919",
        En: "	Greenish，Semitransparent	"
    },
    {
        id: 15,
        number: "LW-4014W-A",
        name: "永固黄2GS W-A	",
        indexs: "	P.Y.14	",
        structure: "	5468-75-7	",
        blotter: "	40-50	",
        PH: "	6-7	",
        heatproof: "	200	",
        light: "	6-7	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	5	",
        removal: "	4	",
        trait: "	绿相，半透明，通用性强	",
        color: "#e6d420",
        En: "	Greenish，Semitransparent，Universal	"
    },
    {
        id: 16,
        number: "LW-4074W-A",
        name: "汉沙黄5GX W-A	",
        indexs: "	P.Y.74	",
        structure: "	6358-31-2	",
        blotter: "	35-45	",
        PH: "	 6-8	",
        heatproof: "	200	",
        light: "	 7-8	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	5	",
        removal: "	4	",
        trait: "	红相，透明	",
        color: "#e5e639",
        En: "	Reddish，Transparent	"
    },
    {
        id: 17,
        number: "LW-4083W-A",
        name: "永固黄HR W-A	",
        indexs: "	P.Y.83	",
        structure: "	5567-15-7 	",
        blotter: "	39-50	",
        PH: "	6-7	",
        heatproof: "	250	",
        light: "	7-8	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	5	",
        removal: "	5	",
        trait: "	红相，透明，不迁移	",
        color: "#f6b24f",
        En: "	Reddish，Transparent，Non-migration	"
    },
    {
        id: 18,
        number: "LW-5005W-B",
        name: "永固橙 W-B	",
        indexs: "	P.O.5	",
        structure: "	3468-63-1	",
        blotter: "	35-50	",
        PH: "	5-7	",
        heatproof: "	200	",
        light: "	7	",
        climate: "	3-4	",
        acidproof: "	4	",
        resisting: "	4	",
        alcohol: "	5	",
        removal: "	3	",
        trait: "	红相，通用型强	",
        color: "#e76616",
        En: "	Reddish，Universal	"
    },
    {
        id: 19,
        number: "LW-5013W-A",
        name: "永固桔黄G W-A	",
        indexs: "	P.O.13	",
        structure: "	3520-72-7	",
        blotter: "	35-50	",
        PH: "	6-7	",
        heatproof: "	200	",
        light: "	5-6	",
        climate: "	3-4	",
        acidproof: "	4	",
        resisting: "	4	",
        alcohol: "	4	",
        removal: "	3	",
        trait: "	黄相，半透明	",
        color: "#e17014",
        En: "	Yellowish，Semitransparent	"
    },
    {
        id: 20,
        number: "LW-5034W-A",
        name: "永固橙RL W-A	",
        indexs: "	P.O.34	",
        structure: "	15793-73-4	",
        blotter: "	40-50	",
        PH: "	6-7	",
        heatproof: "	200	",
        light: "	7	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	5	",
        removal: "	4	",
        trait: "	红相，低粘度，贮存稳定性好	",
        color: "#ed721b",
        En: "	Reddish，Low viscosity，Good stability	"
    },
    {
        id: 21,
        number: "LW-7150-B",
        name: "酞菁蓝B -B	",
        indexs: "	P.B.15：0	",
        structure: "	147-14-8	",
        blotter: "	45-55	",
        PH: "	7-8	",
        heatproof: "	190	",
        light: "	6	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	5	",
        removal: "	5	",
        trait: "	红相，低粘度，贮存稳定性好	",
        color: "#1d3591",
        En: "	Reddish，Low viscosity，Good stability	"
    },
    {
        id: 22,
        number: "LW-7150-D",
        name: "酞菁蓝B -D	",
        indexs: "	P.B.15：0	",
        structure: "	147-14-8	",
        blotter: "	45-55	",
        PH: "	7-8	",
        heatproof: "	190	",
        light: "	6	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	5	",
        removal: "	5	",
        trait: "	绿相，低粘度，贮存稳定性好	",
        color: "#1d3591",
        En: "	Greenish，Low viscosity，Good stability	"
    },
    {
        id: 23,
        number: "LW-7153W-D",
        name: "酞菁蓝BGS W-D	",
        indexs: "	P.B.15：3	",
        structure: "	147-14-8	",
        blotter: "	35-50	",
        PH: "	7-8	",
        heatproof: "	260	",
        light: "	7-8	",
        climate: "	4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	5	",
        removal: "	5	",
        trait: "	绿相，低粘度，贮存稳定性好	",
        color: "#003692",
        En: "	Greenish，Low viscosity，Good stability	"
    },
    {
        id: 24,
        number: "LW-6007W-F",
        name: "酞菁绿G W-F	",
        indexs: "	P.G.7	",
        structure: "	1328-53-6	",
        blotter: "	40-50	",
        PH: "	7-8	",
        heatproof: "	280	",
        light: "	7-8	",
        climate: "	4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "	5	",
        removal: "	5	",
        trait: "	黄相，低粘度，贮存稳定性好	",
        color: "#0c6334",
        En: "	Yellowish，Low viscosity，Good stability	"
    },
    {
        id: 25,
        number: "LW-3482S-A",
        name: "耐晒大红2BLS-A	",
        indexs: "	P.R.48：2	",
        structure: "	7023-61-2	",
        blotter: "	35-45	",
        PH: "	7-8	",
        heatproof: "	200	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "-",
        removal: "-",
        trait: "	黄相，半透明	",
        color: "#b81c22",
        En: "	yellowish,high gloss	"
    },
    {
        id: 26,
        number: "LW-3482S-B",
        name: "耐晒大红2BXL S-B	",
        indexs: "	P.R.48：2	",
        structure: "	7023-61-2	",
        blotter: "	35-45	",
        PH: "	7-8	",
        heatproof: "	200	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "-",
        removal: "-",
        trait: "	蓝相，透明	",
        color: "#b01e23",
        En: "	bluish,transparent 	"
    },
    {
        id: 27,
        number: "LW-3571S-A",
        name: "立索尔宝红 S-A	",
        indexs: "	P.R.57：1	",
        structure: "	 5281-04-9	",
        blotter: "	35-50	",
        PH: "	7-8	",
        heatproof: "	180	",
        light: "	 6-7	",
        climate: "	 3-4	",
        acidproof: "	4	",
        resisting: "	4	",
        alcohol: "-",
        removal: "-",
        trait: "	黄相，半透明	",
        color: "#aa1f24",
        En: "	yellowish,semitransparent 	"
    },
    {
        id: 28,
        number: "LW-3571S-B",
        name: "立索尔宝红 S-B	",
        indexs: "	P.R.57：1	",
        structure: "	 5281-04-9	",
        blotter: "	35-50	",
        PH: "	7-8	",
        heatproof: "	180	",
        light: "	 6-7	",
        climate: "	 3-4	",
        acidproof: "	4	",
        resisting: "	4	",
        alcohol: "-",
        removal: "-",
        trait: "	蓝相，透明	",
        color: "#a91f24",
        En: "	bluish,transparent 	"
    },
    {
        id: 29,
        number: "LW-3146S-A",
        name: "永固桃红 S-A	",
        indexs: "	P.R.146	",
        structure: "	5280-68-2	",
        blotter: "	65-70	",
        PH: "	7-8	",
        heatproof: "	190	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	4	",
        resisting: "	4	",
        alcohol: "-",
        removal: "-",
        trait: "	蓝相，低黏度,耐蒸煮	",
        color: "#a41f24",
        En: "	bluish,boiling resistance	"
    },
    {
        id: 30,
        number: "LW-3184S-A",
        name: "永固红F6B S-A	",
        indexs: "	P.R.184	",
        structure: "	99402-80-9	",
        blotter: "	40-50	",
        PH: "	 6-8	",
        heatproof: "	190	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "-",
        removal: "-",
        trait: "	蓝相，耐蒸煮	",
        color: "#a21f24",
        En: "	bluish,boiling resistance	"
    },
    {
        id: 31,
        number: "LW-4012W-2A",
        name: "联苯胺黄G W-2A	",
        indexs: "	P.Y.12	",
        structure: "	6358-85-6	",
        blotter: "	40-50	",
        PH: "	6-7	",
        heatproof: "	190	",
        light: "	6	",
        climate: "	3	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "-",
        removal: "-",
        trait: "	绿相，半透	",
        color: "#f5c927",
        En: "	Greenish，Ranslucent	"
    },
    {
        id: 32,
        number: "LW-4012S-A",
        name: "联苯胺黄G S-A	",
        indexs: "	P.Y.12	",
        structure: "	6358-85-6	",
        blotter: "	40-50	",
        PH: "	6-7	",
        heatproof: "	190	",
        light: "	6	",
        climate: "	3	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "-",
        removal: "-",
        trait: "	红相，透明	",
        color: "#f5c01d",
        En: "	Reddish，Transparent	"
    },
    {
        id: 33,
        number: "LW-4012S-B",
        name: "联苯胺黄G S-B	",
        indexs: "	P.Y.12	",
        structure: "	6358-85-6	",
        blotter: "	40-50	",
        PH: "	6-7	",
        heatproof: "	190	",
        light: "	6	",
        climate: "	3	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "-",
        removal: "-",
        trait: "	绿相，遮盖 	",
        color: "#f5c01d",
        En: "	Greenish,cover	"
    },
    {
        id: 34,
        number: "LW-4013S-A",
        name: "永固黄GR S-A	",
        indexs: "	P.Y.13	",
        structure: "	5102-83-0	",
        blotter: "	40-50	",
        PH: "	6-7	",
        heatproof: "	190	",
        light: "	 6-7	",
        climate: "	 3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "-",
        removal: "-",
        trait: "	红相，高透明	",
        color: "#f5b919",
        En: "	Reddish,High transparent	"
    },
    {
        id: 35,
        number: "LW-4013S-B",
        name: "永固黄BRXL S-B	",
        indexs: "	P.Y.13	",
        structure: "	5102-83-0	",
        blotter: "	40-50	",
        PH: "	6-7	",
        heatproof: "	190	",
        light: "	 6-7	",
        climate: "	 3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "-",
        removal: "-",
        trait: "	红相，高透明	",
        color: "#f5b919",
        En: "	Reddish,High transparent	"
    },
    {
        id: 36,
        number: "LW-4014S-A",
        name: "永固黄2GS S-A	",
        indexs: "	P.Y.14	",
        structure: "	5468-75-7	",
        blotter: "	40-50	",
        PH: "	6-7	",
        heatproof: "	190	",
        light: "	 6-7	",
        climate: "	 3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "-",
        removal: "-",
        trait: "	红相，高透明	",
        color: "#e6d420",
        En: "	Reddish,High transparent	"
    },
    {
        id: 37,
        number: "LW-4014S-B",
        name: "永固黄2GS S-A	",
        indexs: "	P.Y.14	",
        structure: "	5468-75-7	",
        blotter: "	40-50	",
        PH: "	6-7	",
        heatproof: "	190	",
        light: "	 6-7	",
        climate: "	 3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "-",
        removal: "-",
        trait: "	绿相，半透明	",
        color: "#f0d21f",
        En: "	greenish,semitransparent	"
    },
    {
        id: 38,
        number: "LW-4083S-A",
        name: "永固黄HR S-A	",
        indexs: "	P.Y.83	",
        structure: "	5567-15-7 	",
        blotter: "	39-50	",
        PH: "	6-7	",
        heatproof: "	240	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "-",
        removal: "-",
        trait: "	红相，高透明，贮存稳定性好	",
        color: "#f29417",
        En: "	reddish,high transparent,good stability	"
    },
    {
        id: 39,
        number: "LW-4083S-B",
        name: "永固黄HR S-B	",
        indexs: "	P.Y.83	",
        structure: "	5567-15-7 	",
        blotter: "	39-50	",
        PH: "	6-7	",
        heatproof: "	240	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "-",
        removal: "-",
        trait: "	绿相，半透明，通用性强	",
        color: "#f29417",
        En: "	greenish,semitransparent,low viscosity	"
    },
    {
        id: 40,
        number: "LW-7154S-A",
        name: "酞菁蓝BGNCF S-A	",
        indexs: "	P.B.15：4	",
        structure: "	147-14-8	",
        blotter: "	54-60	",
        PH: "	7-8	",
        heatproof: "	260	",
        light: "	 7-8	",
        climate: "	 4-5 	",
        acidproof: "	5	",
        resisting: "	4	",
        alcohol: "-",
        removal: "-",
        trait: "	红相，高透明	",
        color: "#1b2b78",
        En: "	reddish,high transparent	"
    },
    {
        id: 41,
        number: "LW-7154S-B",
        name: "酞菁蓝BGNCF S-B	",
        indexs: "	P.B.15：4	",
        structure: "	147-14-8	",
        blotter: "	54-60	",
        PH: "	7-8	",
        heatproof: "	260	",
        light: "	 7-8	",
        climate: "	 4-5 	",
        acidproof: "	5	",
        resisting: "	4	",
        alcohol: "-",
        removal: "-",
        trait: "	绿相，半透明，低黏度	",
        color: "#1c2c6f",
        En: "	greenish,semitransparent,low viscosity	"
    },
    {
        id: 42,
        number: "LW-6007S-A",
        name: "酞菁绿G S-A	",
        indexs: "	P.G.7	",
        structure: "	1328-53-6	",
        blotter: "	40-50	",
        PH: "	7-8	",
        heatproof: "	280	",
        light: "	 7-8	",
        climate: "	 4-5 	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "-",
        removal: "-",
        trait: "	黄相，高透明，低黏度，贮存稳定性好	",
        color: "#116639",
        En: "	yellowish,high transparent,low viscosity,good stability	"
    },
    {
        id: 43,
        number: "LW-4012D-A",
        name: "联苯胺黄G D-A	",
        indexs: "	P.Y.12	",
        structure: "	6358-85-6	",
        blotter: "	40-50	",
        PH: "	6-7	",
        heatproof: "	190	",
        light: "	 5-6	",
        climate: "	 3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "-",
        removal: "-",
        trait: "	绿相，半透明，流动性好	",
        color: "#f4c51c",
        En: "	greenish,semitransparent,high flow	"
    },
    {
        id: 44,
        number: "LW-3571D-A",
        name: "立索尔宝红 D-A	",
        indexs: "	P.R.57：1	",
        structure: "	 5281-04-9	",
        blotter: "	35-50	",
        PH: "	7-8	",
        heatproof: "	200	",
        light: "	 6-7	",
        climate: "	 3-4	",
        acidproof: "	4	",
        resisting: "	4	",
        alcohol: "-",
        removal: "-",
        trait: "	黄相，半透明，流动性好	",
        color: "#b52c3e",
        En: "	yellowish,semitransparent,high flow	"
    },
    {
        id: 45,
        number: "LW-3571D-B",
        name: "立索尔宝红 D-B	",
        indexs: "	P.R.57：1	",
        structure: "	 5281-04-9	",
        blotter: "	35-50	",
        PH: "	7-8	",
        heatproof: "	200	",
        light: "	 6-7	",
        climate: "	 3-4	",
        acidproof: "	4	",
        resisting: "	4	",
        alcohol: "-",
        removal: "-",
        trait: "	蓝相，透明，流动性好	",
        color: "#9e1f24",
        En: "	bluish,transparent,high flow	"
    },
    {
        id: 46,
        number: "LW-3571D-D",
        name: "立索尔宝红 D-D	",
        indexs: "	P.R.57：1	",
        structure: "	 5281-4-9	",
        blotter: "	35-50	",
        PH: "	7-8	",
        heatproof: "	200	",
        light: "	 6-7	",
        climate: "	 3-4	",
        acidproof: "	4	",
        resisting: "	4	",
        alcohol: "-",
        removal: "-",
        trait: "	黄相，半透明，流动性好	",
        color: "#a91f24",
        En: "	yellowish,semitransparent,high flow	"
    },
    {
        id: 47,
        number: "LW-3571D-E",
        name: "立索尔宝红 D-E	",
        indexs: "	P.R.57：1	",
        structure: "	 5281-4-9	",
        blotter: "	35-50	",
        PH: "	7-8	",
        heatproof: "	200	",
        light: "	 6-7	",
        climate: "	 3-4	",
        acidproof: "	4	",
        resisting: "	4	",
        alcohol: "-",
        removal: "-",
        trait: "	黄相，半透明，流动性好	",
        color: "#9d1f24",
        En: "	yellowish,semitransparent,high flow	"
    },
    {
        id: 48,
        number: "LW-7153D-A",
        name: "酞菁蓝GS D-A	",
        indexs: "	P.B.15：3	",
        structure: "	147-14-8	",
        blotter: "	35-50	",
        PH: "	7-8	",
        heatproof: "	260	",
        light: "	 7-8	",
        climate: "	 4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        alcohol: "-",
        removal: "-",
        trait: "	红相，透明，流动性好	",
        color: "#003793",
        En: "	reddish,transparent,high flow	"
    },
];
var _toLiao = [
    {
        id: 1,
        number: "LW-3002W-A",
        name: "永固红F2R W-A	",
        indexs: "	P.R.2 	",
        structure: "	6041-94-7	",
        blotter: "	45-50	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	180	",
        light: "	6	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	3	",
        trait: "	蓝相，不渗色	",
        color: "#bf1a20",
        En: "	bluish,no bleeding	"
    },
    {
        id: 2,
        number: "LW-3008W-A",
        name: "永固红F4R W-A	",
        indexs: "	P.R.8	",
        structure: "	6410-30-6	",
        blotter: "	40-50	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	160	",
        light: "	6	",
        climate: "	 3-4	",
        acidproof: "	4	",
        resisting: "	4	",
        removal: "	3	",
        trait: "	蓝相，不渗色	",
        color: "#b41e23",
        En: "	bluish,no bleeding	"
    },
    {
        id: 3,
        number: "LW-3022W-A ",
        name: "耐晒亮红 W-A	",
        indexs: "	P.R.22	",
        structure: "	6448-95-9 	",
        blotter: "	35-52	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	160	",
        light: "	6	",
        climate: "	3	",
        acidproof: "	4	",
        resisting: "	4	",
        removal: "	3	",
        trait: "	黄相，不渗色	",
        color: "#c7171e",
        En: "	yellowish,no bleeding	"
    },
    {
        id: 4,
        number: "LW-3023W-A",
        name: "坚固玫红 W-A	",
        indexs: "	P.R.23	",
        structure: "	6471-49-4	",
        blotter: "	40-50	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	160	",
        light: "	6	",
        climate: "	4	",
        acidproof: "	4	",
        resisting: "	4	",
        removal: "	3	",
        trait: "	黄相，耐水性好	",
        color: "#c21920",
        En: "	yellowish,good water resistance	"
    },
    {
        id: 5,
        number: "LW-3023W-B",
        name: "坚固玫红 W-B	",
        indexs: "	P.R.23	",
        structure: "	6471-49-4	",
        blotter: "	40-50	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	160	",
        light: "	6	",
        climate: "	4	",
        acidproof: "	4	",
        resisting: "	4	",
        removal: "	3	",
        trait: "	蓝相，耐水性好	",
        color: "#b21e23",
        En: "	bluish,good water resistance	"
    },
    {
        id: 6,
        number: "LW-3023W-C",
        name: "坚固玫红 W-C	",
        indexs: "	P.R.23	",
        structure: "	6471-49-4	",
        blotter: "	40-50	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	180	",
        light: "	6	",
        climate: "	4	",
        acidproof: "	4	",
        resisting: "	4	",
        removal: "	3	",
        trait: "	最蓝相，耐水性好	",
        color: "#b41e23",
        En: "	most bluish,good water resistance	"
    },
    {
        id: 7,
        number: "LW-3031W-A",
        name: "红青莲BF W-A	",
        indexs: "	P.R.31	",
        structure: "	6448-95-9 	",
        blotter: "	35-52	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	180	",
        light: "	6-7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	4	",
        trait: "	蓝相，鲜艳，不渗色	",
        color: "#891c34",
        En: "	bluish,bright,no bleeding	"
    },
    {
        id: 8,
        number: "LW-3112W-A",
        name: "永固红FGR W-A	",
        indexs: "	P.R.112	",
        structure: "	6535-46-2	",
        blotter: "	35-40	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	190	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	3	",
        trait: "	黄相，遮盖	",
        color: "#da3937",
        En: "	yellowish,cover	"
    },
    {
        id: 9,
        number: "LW-3112W-B",
        name: "永固红FGR W-B	",
        indexs: "	P.R.112	",
        structure: "	6535-46-2	",
        blotter: "	35-40	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	190	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	3	",
        trait: "	蓝相，透明	",
        color: "#d4161a",
        En: "	bluish,transparent	"
    },
    {
        id: 10,
        number: "LW-3146W-A",
        name: "永固桃红 W-A	",
        indexs: "	P.R.146	",
        structure: "	5280-68-2	",
        blotter: "	65-70	",
        PH: "	7-8	",
        crocking: "	5	",
        heatproof: "	200	",
        light: "	 7-8	",
        climate: "	 4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	3-4	",
        trait: "	黄相	",
        color: "#ba1c22",
        En: "	yellowish	"
    },
    {
        id: 11,
        number: "LW-3146S-A",
        name: "永固桃红 S-A	",
        indexs: "	P.R.146	",
        structure: "	5280-68-2	",
        blotter: "	65-70	",
        PH: "	7-8	",
        crocking: "	5	",
        heatproof: "	200	",
        light: "	 7-8	",
        climate: "	 4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	蓝相，不迁移，耐蒸煮	",
        color: "#b21e23",
        En: "	bluish,non-migration,boiling resistence	"
    },
    {
        id: 12,
        number: "LW-3170-A",
        name: "永固红F5RK -A	",
        indexs: "	P.R.170	",
        structure: "	2786-76-7 	",
        blotter: "	45-55	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	230	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	4	",
        trait: "	蓝相，不含APEO	",
        color: "#bf1a20",
        En: "	bluish,non-migration,without APEO	"
    },
    {
        id: 13,
        number: "LW-3170-D",
        name: "永固红F5RK -D	",
        indexs: "	P.R.170	",
        structure: "	2786-76-7 	",
        blotter: "	45-55	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	230	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	黄相，不迁移，不含APEO	",
        color: "#bc303c",
        En: "	yellowish,non-migration,without APEO	"
    },
    {
        id: 14,
        number: "LW-4012W-A",
        name: "联苯胺黄G W-A	",
        indexs: "	P.Y.12	",
        structure: "	6358-85-6	",
        blotter: "	40-50	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	190	",
        light: "	6	",
        climate: "	3	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	3-4	",
        trait: "	绿相，半透明，通用性强	",
        color: "#f4c51c",
        En: "	greenish,semitransparent,universal	"
    },
    {
        id: 15,
        number: "LW-4012W-B",
        name: "联苯胺黄G W-B	",
        indexs: "	P.Y.12	",
        structure: "	6358-85-6	",
        blotter: "	40-50	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	190	",
        light: "	6	",
        climate: "	3	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	3-4	",
        trait: "	红相，透明，通用性强	",
        color: "#f4c51c",
        En: "	reddish,transparent,universal	"
    },
    {
        id: 16,
        number: "LW-4013W-D",
        name: "永固黄2GR W-D	",
        indexs: "	P.Y.13	",
        structure: "	5102-83-0	",
        blotter: "	40-50	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	200	",
        light: "	6-7	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	4	",
        trait: "	绿相，半透明	",
        color: "#f5b919",
        En: "	greenish,semitransparent	"
    },
    {
        id: 17,
        number: "LW-4014W-A",
        name: "永固黄2GS W-A	",
        indexs: "	P.Y.14	",
        structure: "	5468-75-7	",
        blotter: "	40-50	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	200	",
        light: "	6-7	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	4	",
        trait: "	绿相，半透明，通用性强	",
        color: "#e6d524",
        En: "	greenish,semitransparent,universal	"
    },
    {
        id: 18,
        number: "LW-4074W-A",
        name: "汉沙黄5GX W-A	",
        indexs: "	P.Y.74	",
        structure: "	6358-31-2	",
        blotter: "	35-45	",
        PH: "	 6-8	",
        crocking: "	5	",
        heatproof: "	200	",
        light: "	7-8	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	4	",
        trait: "	红相，透明	",
        color: "#e5e639",
        En: "	reddish,transparent	"
    },
    {
        id: 19,
        number: "LW-4083W-A",
        name: "永固黄HR W-A	",
        indexs: "	P.Y.83	",
        structure: "	5567-15-7 	",
        blotter: "	39-50	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	250	",
        light: "	7-8	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	红相，透明，不迁移	",
        color: "#f5a42f",
        En: "	reddish,transparent,non-migration	"
    },
    {
        id: 20,
        number: "LW-4212W-A",
        name: "212嫩黄 W-A	",
        indexs: "	212嫩黄	",
        structure: "		",
        blotter: "	35-42	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	180	",
        light: "	 4-5	",
        climate: "	3	",
        acidproof: "	3-4	",
        resisting: "	3-4	",
        removal: "	4	",
        trait: "	绿相，鲜艳	",
        color: "#d4df35",
        En: "	greenish,bright	"
    },
    {
        id: 21,
        number: "LW-5005W-B",
        name: "永固橙RN W-B	",
        indexs: "	P.O.5	",
        structure: "	3468-63-1	",
        blotter: "	35-50	",
        PH: "	5-7	",
        crocking: "	5	",
        heatproof: "	200	",
        light: "	7	",
        climate: "	3-4	",
        acidproof: "	4	",
        resisting: "	4	",
        removal: "	3	",
        trait: "	红相，通用型强	",
        color: "#e76a19",
        En: "	reddish,universal	"
    },
    {
        id: 22,
        number: "LW-5013W-A",
        name: "永固桔黄G W-A	",
        indexs: "	P.O.13	",
        structure: "	3520-72-7	",
        blotter: "	35-50	",
        PH: "	6-7	",
        crocking: "	5	",
        heatproof: "	200	",
        light: "	5-6	",
        climate: "	3-4	",
        acidproof: "	4	",
        resisting: "	4	",
        removal: "	3	",
        trait: "	黄相，半透明	",
        color: "#e17217",
        En: "	yellowish,semitransparent	"
    },
    {
        id: 23,
        number: "LW-5016-A",
        name: "联大茴香胺橙 -A	",
        indexs: "	P.O.16	",
        structure: "	6505-28-8	",
        blotter: "	35-50	",
        PH: "	6-8	",
        crocking: "	5	",
        heatproof: "	200	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	红相，高色力，分散好	",
        color: "#eb5b1a",
        En: "	reddish,high strength,easy disperse	"
    },
    {
        id: 24,
        number: "LW-7150-B",
        name: "酞菁蓝B -B	",
        indexs: "	P.B.15：0	",
        structure: "	147-14-8	",
        blotter: "	45-55	",
        PH: "	7-8	",
        crocking: "	5	",
        heatproof: "	190	",
        light: "	6	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	红相，低粘度，贮存稳定性好	",
        color: "#1d3591",
        En: "	reddish,low viscosity,good stability	"
    },
    {
        id: 25,
        number: "LW-7150-D",
        name: "酞菁蓝B -D	",
        indexs: "	P.B.15：0	",
        structure: "	147-14-8	",
        blotter: "	45-55	",
        PH: "	7-8	",
        crocking: "	5	",
        heatproof: "	190	",
        light: "	6	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	绿相，低粘度，贮存稳定性好	",
        color: "#1f3591",
        En: "	greenish,low viscosity,good stability	"
    },
    {
        id: 26,
        number: "LW-7151-B",
        name: "酞菁蓝BS -B	",
        indexs: "	P.B.15：1	",
        structure: "	147-14-8	",
        blotter: "	45-55	",
        PH: "	7-8	",
        crocking: "	5	",
        heatproof: "	190	",
        light: "	6	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	红相，高色力	",
        color: "#043994",
        En: "	reddish,high strength 	"
    },
    {
        id: 27,
        number: "LW-7151-D",
        name: "酞菁蓝BS -D	",
        indexs: "	P.B.15：1	",
        structure: "	12239-87-1	",
        blotter: "	45-55	",
        PH: "	7-8	",
        crocking: "	5	",
        heatproof: "	260	",
        light: "	7-8	",
        climate: "	4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	绿相，分散好	",
        color: "#043994",
        En: "	greenish,high strength 	"
    },
    {
        id: 28,
        number: "LW-7153W-D",
        name: "酞菁蓝BGS W-D	",
        indexs: "	P.B.15：3	",
        structure: "	147-14-8	",
        blotter: "	35-50	",
        PH: "	7-8	",
        crocking: "	5	",
        heatproof: "	260	",
        light: "	7-8	",
        climate: "	4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	绿相，低粘度，贮存稳定性好	",
        color: "#003692",
        En: "	greenish,low viscosity,good stability	"
    },
    {
        id: 29,
        number: "LW-6007W-F",
        name: "酞菁绿G W-F	",
        indexs: "	P.G.7	",
        structure: "	1328-53-6	",
        blotter: "	40-50	",
        PH: "	7-8	",
        crocking: "	5	",
        heatproof: "	280	",
        light: "	7-8	",
        climate: "	4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	黄相，鲜艳，遮盖	",
        color: "#0c6334",
        En: "	yellowish,bright,cover	"
    },
    {
        id: 30,
        number: "LW-3170-A",
        name: "	永固红F5RK -A	",
        indexs: "	P.R.170	",
        structure: "	2786-76-7 	",
        blotter: "	45-55	",
        PH: "	 6-7	",
        heatproof: "	230	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	 4-5	",
        trait: "	蓝相，不含APEO	",
        color: "#bf1a20",
        En: "	bluish,without APEO	",
        crocking: ""
    },
    {
        id: 31,
        number: "LW-3170L-A",
        name: "永固红F3RK -A",
        indexs: "	P.R.170	",
        structure: "	2786-76-7 	",
        blotter: "	45-55	",
        PH: "	 6-7	",
        heatproof: "	230	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	 4-5	",
        trait: "	黄相高遮盖，不含APEO	",
        color: "#bf1a20",
        En: "	yellowish,high cover,without APEO	",
        crocking: ""
    },
    {
        id: 32,
        number: "LW-4074L-A",
        name: "汉沙黄2GX-70 L-A	",
        indexs: "	P.Y.74	",
        structure: "	6358-31-2	",
        blotter: "	35-45	",
        PH: "	 6-8	",
        heatproof: "	200	",
        light: "	 7-8	",
        climate: "	 4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	 4-5	",
        trait: "	绿相，高遮盖，耐性好	",
        color: "#f5e528",
        En: "	greenish,high cover,good resistance	",
        crocking: ""
    },
    {
        id: 33,
        number: "LW-4083L-A",
        name: "永固黄HR70 L-A	",
        indexs: "	P.Y.83	",
        structure: "	5567-15-7 	",
        blotter: "	40-52	",
        PH: "	 6-7	",
        heatproof: "	250	",
        light: "	 7-8	",
        climate: "	 4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	红相，高遮盖，耐性好	",
        color: "#f39618",
        En: "	reddish,high cover,good resistance	",
        crocking: ""
    },
    {
        id: 34,
        number: "LW-5005W-B",
        name: "永固橙 W-B	",
        indexs: "	P.O.5	",
        structure: "	3468-63-1	",
        blotter: "	35-50	",
        PH: "	5-7	",
        heatproof: "	180	",
        light: "	 7-8	",
        climate: "	 3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	 4-5	",
        trait: "	红相，通用型强	",
        color: "#e76616",
        En: "	reddish,universal	",
        crocking: ""
    },
    {
        id: 35,
        number: "LW-5036L-A",
        name: "永固橙HL L-A	",
        indexs: "	P.O.36	",
        structure: "	12236-62-3	",
        blotter: "	40-60	",
        PH: "	 6-7	",
        heatproof: "	260	",
        light: "	7-8	",
        climate: "	 4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	遮盖，耐性好	",
        color: "#e97c42",
        En: "	cover,good resistance	",
        crocking: ""
    },
    {
        id: 36,
        number: "LW-7151-B",
        name: "酞菁蓝BS -B	",
        indexs: "	P.B.15:1	",
        structure: "	147-14-8	",
        blotter: "	45-55	",
        PH: "	7-8	",
        heatproof: "	190	",
        light: "	6	",
        climate: "	 3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	红相，高色力	",
        color: "#043994",
        En: "	reddish,high strength	",
        crocking: ""
    },
    {
        id: 37,
        number: "LW-7151-D",
        name: "酞菁蓝BS -D	",
        indexs: "	P.B.15:1	",
        structure: "	12239-87-1	",
        blotter: "	40-50	",
        PH: "	7-8	",
        heatproof: "	260	",
        light: "	7-8	",
        climate: "	 4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	绿相，分散好	",
        color: "#043994",
        En: "	greenish,easy disperse	",
        crocking: ""
    },
    {
        id: 38,
        number: "LW-7152-C",
        name: "酞菁蓝BNCF -C	",
        indexs: "	P.B.15:2	",
        structure: "	12239-89-1	",
        blotter: "	45-55	",
        PH: "	7-8	",
        heatproof: "	260	",
        light: "	7-8	",
        climate: "	 4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	红相，分散好	",
        color: "#1c2c73",
        En: "	reddish,easy disperse	",
        crocking: ""
    },
    {
        id: 39,
        number: "LW-7153W-D",
        name: "酞菁蓝BGS W-D	",
        indexs: "	P.B.15:3	",
        structure: "	147-14-8	",
        blotter: "	35-50	",
        PH: "	7-8	",
        heatproof: "	260	",
        light: "	7	",
        climate: "	 4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	绿相，半透明	",
        color: "#003692",
        En: "	greenish,semitransparent	",
        crocking: ""
    },
    {
        id: 40,
        number: "LW-7154S-B",
        name: "酞菁蓝BGNCF S-B	",
        indexs: "	P.B.15:4	",
        structure: "	147-14-8	",
        blotter: "	54-60	",
        PH: "	7-8	",
        heatproof: "	260	",
        light: "	7	",
        climate: "	 4-5	",
        acidproof: "	5	",
        resisting: "	4	",
        removal: "	4	",
        trait: "	绿相，半透明	",
        color: "#1c2b77",
        En: "	greenish,semitransparent	",
        crocking: ""
    },
    {
        id: 41,
        number: "LW-6007W-F",
        name: "酞菁绿G -F	",
        indexs: "	P.G.7	",
        structure: "	1328-53-6	",
        blotter: "	40-50	",
        PH: "	7-8	",
        heatproof: "	280	",
        light: "	7-8	",
        climate: "	 4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        removal: "	5	",
        trait: "	黄相，鲜艳，遮盖	",
        color: "#0c6334",
        En: "	yellowish,bright,cover	",
        crocking: ""
    },
];
var _palstic = [
    {
        id: 1,
        number: "LW-3481P-C",
        name: "	耐晒大红BBN P-C	",
        indexs: "	P.R.48:1	",
        structure: "	7585-41-3	",
        blotter: "	40-50	",
        PH: "	7-8	",
        removal: "	5	",
        heatproof: "	260	",
        light: "	6-7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	黄相，不迁移	",
        color: "#c01920",
        En: "	yellowish,non-migration	",
        alcohol: "-"
    },
    {
        id: 2,
        number: "LW-3482P-C",
        name: "	耐晒大红2BP P-C	",
        indexs: "	P.R.48:2	",
        structure: "	5281-4-9	",
        blotter: "	40-50	",
        PH: "	7-8	",
        removal: "	5	",
        heatproof: "	260	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	黄相，不迁移	",
        color: "#b81c22",
        En: "	yellowish,non-migration	",
        alcohol: "-"
    },
    {
        id: 3,
        number: "LW-3483P-A",
        name: "	耐晒大红 2BSP P-A	",
        indexs: "	P.R.48:3	",
        structure: "	15782-05-5	",
        blotter: "	43-50	",
        PH: "	7-8	",
        removal: "	5	",
        heatproof: "	260	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	4	",
        resisting: "	5	",
        trait: "	黄相，不迁移	",
        color: "#cf161b",
        En: "	yellowish,non-migration	",
        alcohol: "-"
    },
    {
        id: 4,
        number: "LW-3571P-A",
        name: "	立索尔宝红 P-A	",
        indexs: "	P.R.57:1	",
        structure: "	5281-4-9	",
        blotter: "	35-50	",
        PH: "	7-8	",
        removal: "	5	",
        heatproof: "	200	",
        light: "	6	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	蓝相，不迁移	",
        color: "#a91f24",
        En: "	bluish,non-migration	",
        alcohol: "-"
    },
    {
        id: 5,
        number: "LW-3170-A",
        name: "	永固红F5RK -A	",
        indexs: "	P.R.170	",
        structure: "	2786-76-7 	",
        blotter: "	45-55	",
        PH: "	6-7	",
        removal: "	5	",
        heatproof: "	230	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	蓝相，不迁移，不含APEO	",
        color: "#bf1a20",
        En: "	bluish,non-migration,without APEO	",
        alcohol: "-"
    },
    {
        id: 6,
        number: "LW-3170-D",
        name: "	永固红F5RK -D	",
        indexs: "	P.R.170	",
        structure: "	2786-76-7 	",
        blotter: "	45-55	",
        PH: "	6-7	",
        removal: "	5	",
        heatproof: "	230	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	黄相，不迁移，不含APEO	",
        color: "#bb2b39",
        En: "	yellowish,non-migration,without APEO	",
        alcohol: "-"
    },
    {
        id: 7,
        number: "LW-4012K-A",
        name: "	联苯胺黄G K-A	",
        indexs: "	P.Y.12	",
        structure: "	6358-85-6	",
        blotter: "	40-50	",
        PH: "	6-7	",
        removal: "	3	",
        heatproof: "	190	",
        light: "	6	",
        climate: "	3	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	红相，分散好	",
        color: "#f4c51c",
        En: "	reddish,easy disperse	",
        alcohol: "-"
    },
    {
        id: 8,
        number: "LW-4013P-A",
        name: "	永固黄GR P-A	",
        indexs: "	P.Y.13	",
        structure: "	5102-83-0	",
        blotter: "	40-50	",
        PH: "	6-7	",
        removal: "	4-5	",
        heatproof: "	200	",
        light: "	6-7	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	绿相，分散好	",
        color: "#f5b919",
        En: "	greenish,easy disperse	",
        alcohol: "-"
    },
    {
        id: 9,
        number: "LW-4014K-A",
        name: "	永固黄2GS P-A	",
        indexs: "	P.Y.14	",
        structure: "	5468-75-7	",
        blotter: "	40-50	",
        PH: "	6-7	",
        removal: "	4-5	",
        heatproof: "	200	",
        light: "	6-7	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	绿相，鲜艳，分散好	",
        color: "#e6d422",
        En: "	greenish,bright,easy disperse	",
        alcohol: "-"
    },
    {
        id: 10,
        number: "LW-4017P-A",
        name: "	永固黄GG P-A	",
        indexs: "	P.Y.17	",
        structure: "	4531-49-1	",
        blotter: "	45-55	",
        PH: "	6-8	",
        removal: "	4-5	",
        heatproof: "	200	",
        light: "	6	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	绿相，高色力	",
        color: "#e2dd23",
        En: "	greenish,high strength	",
        alcohol: "-"
    },
    {
        id: 11,
        number: "LW-4083P-A",
        name: "	永固黄HR02 P-A	",
        indexs: "	P.Y.83	",
        structure: "	5567-15-7 	",
        blotter: "	40-52	",
        PH: "	6-7	",
        removal: "	5	",
        heatproof: "	250	",
        light: "	7-8	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	绿相，半透明	",
        color: "#f29417",
        En: "	greenish,semitransparent	",
        alcohol: "-"
    },
    {
        id: 12,
        number: "LW-4083P-Z",
        name: "	永固黄HR P-Z	",
        indexs: "	P.Y.83	",
        structure: "	5567-15-7 	",
        blotter: "	40-52	",
        PH: "	6-7	",
        removal: "	5	",
        heatproof: "	250	",
        light: "	7-8	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	红相，透明	",
        color: "#f18b1a",
        En: "	reddish,transparent	",
        alcohol: "-"
    },
    {
        id: 13,
        number: "LW-4191P-A",
        name: "	颜料艳黄HGR P-A	",
        indexs: "	J16	",
        structure: "	129423-54-7	",
        blotter: "	45-53	",
        PH: "	6-7	",
        removal: "	4	",
        heatproof: "	250	",
        light: "	7-8	",
        climate: "	4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	红相，高色力	",
        color: "#f5b118",
        En: "	reddish,high strength	",
        alcohol: "-"
    },
    {
        id: 14,
        number: "LW-4191P-C",
        name: "	颜料艳黄HGR P-C	",
        indexs: "	-J7	",
        structure: "	129423-54-7	",
        blotter: "	45-53	",
        PH: "	6-7	",
        removal: "	5	",
        heatproof: "	250	",
        light: "	7-8	",
        climate: "	4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	绿相，不迁移	",
        color: "#f5b118",
        En: "	greenish,non-migration	",
        alcohol: "-"
    },
    {
        id: 15,
        number: "LW-4183P-A",
        name: "	颜料黄183 P-A	",
        indexs: "	P.Y.183	",
        structure: "	5567-15-7 	",
        blotter: "	40-52	",
        PH: "	6-7	",
        removal: "	5	",
        heatproof: "	280	",
        light: "	7-8	",
        climate: "	5	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	红相，耐性好，不迁移	",
        color: "#f5bb19",
        En: "	reddish,good resistance	",
        alcohol: "-"
    },
    {
        id: 16,
        number: "LW-5013W-A",
        name: "	永固桔黄 W-A	",
        indexs: "	P.O.13	",
        structure: "	3520-72-7	",
        blotter: "	35-50	",
        PH: "	6-7	",
        removal: "	4	",
        heatproof: "	180	",
        light: "	7	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	黄相，半透明	",
        color: "#e1741a",
        En: "	yellowish,semitransparent	",
        alcohol: "-"
    },
    {
        id: 17,
        number: "LW-5016-A",
        name: "	联大茴香胺橙 -A	",
        indexs: "	P.O.16	",
        structure: "	6505-28-8	",
        blotter: "	35-50	",
        PH: "	6-8	",
        removal: "	5	",
        heatproof: "	200	",
        light: "	7	",
        climate: "	4	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	红相，高色力，分散好	",
        color: "#eb5b1a",
        En: "	reddish,high strength,easy disperse	",
        alcohol: "-"
    },
    {
        id: 18,
        number: "LW-7150K-D",
        name: "	酞菁蓝B K-D	",
        indexs: "	P.B.15：0	",
        structure: "	147-14-8	",
        blotter: "	45-55	",
        PH: "	7-8	",
        removal: "	5	",
        heatproof: "	190	",
        light: "	6-7	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	绿相，分散好	",
        color: "#1d3591",
        En: "	greenish,easy disperse	",
        alcohol: "-"
    },
    {
        id: 19,
        number: "LW-7150P-D",
        name: "	酞菁蓝B P-D	",
        indexs: "	P.B.15：0	",
        structure: "	147-14-8	",
        blotter: "	45-55	",
        PH: "	7-8	",
        removal: "	5	",
        heatproof: "	190	",
        light: "	6-7	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	绿相，高色力，分散好	",
        color: "#1d3591",
        En: "	greenish,high strength,easy disperse	",
        alcohol: "-"
    },
    {
        id: 20,
        number: "LW-7150P-G",
        name: "	酞菁蓝B P-G	",
        indexs: "	P.B.15：0	",
        structure: "	147-14-8	",
        blotter: "	45-55	",
        PH: "	7-8	",
        removal: "	5	",
        heatproof: "	190	",
        light: "	6-7	",
        climate: "	3-4	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	红相，高色力，分散好	",
        color: "#343390",
        En: "	reddish,high strength,easy disperse	",
        alcohol: "-"
    },
    {
        id: 21,
        number: "LW-7151K-D",
        name: "	酞菁蓝BS K-D	",
        indexs: "	P.B.15：1	",
        structure: "	12239-87-1	",
        blotter: "	45-55	",
        PH: "	7-8	",
        removal: "	5	",
        heatproof: "	260	",
        light: "	7	",
        climate: "	5	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	绿相，分散好	",
        color: "#043994",
        En: "	greenish,easy disperse	",
        alcohol: "-"
    },
    {
        id: 22,
        number: "LW-7151P-D",
        name: "	酞菁蓝BS P-D	",
        indexs: "	P.B.15：1	",
        structure: "	12239-87-1	",
        blotter: "	45-55	",
        PH: "	7-8	",
        removal: "	5	",
        heatproof: "	260	",
        light: "	7	",
        climate: "	5	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	绿相，高色力，分散好	",
        color: "#0b3a95",
        En: "	greenish,high strength,easy disperse	",
        alcohol: "-"
    },
    {
        id: 23,
        number: "LW-7152P-A",
        name: "	酞菁蓝BNCF P-A	",
        indexs: "	P.B.15：2	",
        structure: "	12239-89-1	",
        blotter: "	45-55	",
        PH: "	7-8	",
        removal: "	5	",
        heatproof: "	300	",
        light: "	7-8	",
        climate: "	4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	绿相，高色力，分散好	",
        color: "#1c2c6f",
        En: "	greenish,high strength,easy disperse	",
        alcohol: "-"
    },
    {
        id: 24,
        number: "LW-7153K-D",
        name: "	酞菁蓝BGS K-D	",
        indexs: "	P.B.15：3	",
        structure: "	147-14-8	",
        blotter: "	35-50	",
        PH: "	7-8	",
        removal: "	5	",
        heatproof: "	260	",
        light: "	7-8	",
        climate: "	4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	绿相，分散好	",
        color: "#0d3a94",
        En: "	greenish,easy disperse	",
        alcohol: "-"
    },
    {
        id: 25,
        number: "LW-7153P-D",
        name: "	酞菁蓝BGS P-D	",
        indexs: "	P.B.15：3	",
        structure: "	147-14-8	",
        blotter: "	35-50	",
        PH: "	7-8	",
        removal: "	5	",
        heatproof: "	260	",
        light: "	7-8	",
        climate: "	4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	绿相，高色力，分散好	",
        color: "#003692",
        En: "	greenish,high strength,easy disperse	",
        alcohol: "-"
    },
    {
        id: 26,
        number: "LW-6007P-F",
        name: "	酞菁绿G P-E	",
        indexs: "	P.G.7	",
        structure: "	1328-53-6	",
        blotter: "	40-50	",
        PH: "	7-8	",
        removal: "	5	",
        heatproof: "	280	",
        light: "	7-8	",
        climate: "	4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	黄相，高色力,分散好	",
        color: "#0c6334",
        En: "	yellowish,high strength,easy disperse	",
        alcohol: "-"
    },
    {
        id: 27,
        number: "LW-6007-E",
        name: "	酞菁绿G P-E	",
        indexs: "	P.G.7	",
        structure: "	1328-53-6	",
        blotter: "	40-50	",
        PH: "	7-8	",
        removal: "	5	",
        heatproof: "	280	",
        light: "	7-8	",
        climate: "	4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	蓝相	",
        color: "#0c6334",
        En: "	bluish	",
        alcohol: "-"
    },
    {
        id: 28,
        number: "LW-6007-F",
        name: "	酞菁绿G -F	",
        indexs: "	P.G.7	",
        structure: "	1328-53-6	",
        blotter: "	40-50	",
        PH: "	7-8	",
        removal: "	5	",
        heatproof: "	280	",
        light: "	7-8	",
        climate: "	4-5	",
        acidproof: "	5	",
        resisting: "	5	",
        trait: "	黄相，分散好	",
        color: "#0c6334",
        En: "	yellowish,easy disperse	",
        alcohol: "-"
    },
];

//荧光材料
var light = [
    {id: 1, number: "LFB-101", name: "荧光白	", Enname: "	Fluo.White	"},
    {id: 2, number: "LFB-205", name: "荧光黄	", Enname: "	Fluo.Yellow	"},
    {id: 3, number: "LFB-207", name: "荧光桔黄	", Enname: "	Fluo.Orange Yellow	"},
    {id: 4, number: "LFB-305", name: "荧光橙	", Enname: "	Fluo.Orange 	"},
    {id: 5, number: "LFB-400", name: "荧光橙红	", Enname: "	Fluo.Orange Red	"},
    {id: 6, number: "LFB-403", name: "荧光大红	", Enname: "	Fluo.Scarlet	"},
    {id: 7, number: "LFB-503", name: "荧光粉红	", Enname: "	Fluo.Pink	"},
    {id: 8, number: "LFB-507", name: "荧光玫瑰红	", Enname: "	Fluo.Rose Red	"},
    {id: 9, number: "LFB-605", name: "荧光紫	", Enname: "	Fluo.Violet	"},
    {id: 10, number: "LFB-707", name: "荧光品红	", Enname: "	Fluo.Magenta	"},
    {id: 11, number: "LFB-805", name: "荧光蓝	", Enname: "	Fluo.Blue	"},
    {id: 12, number: "LFB-905", name: "荧光绿	", Enname: "	Fluo.Green	"},
    {id: 13, number: "LD-8001", name: "荧光妃红	", Enname: "	Fluo.Cerise	"},
    {id: 14, number: "LD-8002", name: "荧光桔黄	", Enname: "	Fluo.Orange Yellow	"},
    {id: 15, number: "LD-8003", name: "荧光柠檬黄	", Enname: "	Fluo.Lemon Yellow	"},
    {id: 16, number: "LD-8004", name: "荧光桔红	", Enname: "	Fluo.Orange Red	"},
    {id: 17, number: "LD-8005", name: "荧光桔黄G 	", Enname: "	Fluo.Orange Yellow G	"},
    {id: 18, number: "LD-8006", name: "荧光绿	", Enname: "	Fluo.Green	"},
    {id: 19, number: "LD-8007", name: "荧光紫青莲	", Enname: "	Fluo.Violet	"},
    {id: 20, number: "LD-8008", name: "荧光红青莲	", Enname: "	Fluo.Red Violet	"},
    {id: 21, number: "LD-8009", name: "荧光宝蓝	", Enname: "	Fluo.Blue	"},
    {id: 22, number: "LD-8010", name: "荧光洋红	", Enname: "	Fluo.Rubine	"},
    {id: 23, number: "LD-8011", name: "荧光大红	", Enname: "	Fluo.Scarlet	"},
    {id: 24, number: "LD-8012", name: "荧光金黄	", Enname: "	Fluo.Golden Yellow	"},
    {id: 25, number: "LD-8013", name: "荧光白	", Enname: "	Fluo.White	"},
    {id: 26, number: "LD-8015", name: "荧光翠蓝	", Enname: "	Fluo.Turquoise Blue	"},
    {id: 27, number: "LFL-101", name: "荧光白	", Enname: "	Fluo.White	"},
    {id: 28, number: "LFL-205", name: "荧光黄	", Enname: "	Fluo.Yellow	"},
    {id: 29, number: "LFL-305", name: "荧光橙	", Enname: "	Fluo.Orange 	"},
    {id: 30, number: "LFL-400", name: "荧光橙红	", Enname: "	Fluo.Orange Red	"},
    {id: 31, number: "LFL-403", name: "荧光大红	", Enname: "	Fluo.Scarlet	"},
    {id: 32, number: "LFL-503", name: "荧光粉红	", Enname: "	Fluo.Pink	"},
    {id: 33, number: "LFL-507", name: "荧光玫瑰红	", Enname: "	Fluo.Rose Red	"},
    {id: 34, number: "LFL-605", name: "荧光紫	", Enname: "	Fluo.Violet	"},
    {id: 35, number: "LFL-707", name: "荧光品红	", Enname: "	Fluo.Magenta	"},
    {id: 36, number: "LFL-805", name: "荧光蓝	", Enname: "	Fluo.Blue	"},
    {id: 37, number: "LFL-905", name: "荧光绿	", Enname: "	Fluo.Green	"},
    {id: 38, number: "LPA-205", name: "荧光黄	", Enname: "	Fluo.Yellow	"},
    {id: 39, number: "LPA-207", name: "荧光桔黄	", Enname: "	Fluo.Orange Yellow	"},
    {id: 40, number: "LPA-305", name: "荧光橙	", Enname: "	Fluo.Orange 	"},
    {id: 41, number: "LPA-400", name: "荧光橙红	", Enname: "	Fluo.Orange Red	"},
    {id: 42, number: "LPA-403", name: "荧光大红	", Enname: "	Fluo.Scarlet	"},
    {id: 43, number: "LPA-503", name: "荧光粉红	", Enname: "	Fluo.Pink	"},
    {id: 44, number: "LPA-605", name: "荧光紫	", Enname: "	Fluo.Violet	"},
    {id: 45, number: "LPA-707", name: "荧光品红	", Enname: "	Fluo.Magenta	"},
    {id: 46, number: "LPA-805", name: "荧光蓝	", Enname: "	Fluo.Blue	"},
    {id: 47, number: "LPA-905", name: "荧光绿	", Enname: "	Fluo.Green	"},
];
var _light = {
    createHtml: function () {
        var _html = '';
        light.map((v, i) => {
            // var i =1
            _html += ``
            _html += ` <li id="light${v.id}">
                        <div>${v.number}</div>
                        <div>${v.name}</div>
                      </li>`;
            if (v.id == 13) {
                _html += `<li class="title">LD系列有机颜料</li>`
            }
            if (v.id == 27) {
                _html += `<li class="title">LFL系列有机颜料</li>`
            }
            if (v.id == 38) {
                _html += `<li class="title">LPA系列有机颜料</li>`
            }
        });
        $('.light').append(_html)
    }
};
//水性材料
var base = [
    {
        id: 1,
        number: "8111",
        name: "	大红 FFG	",
        Enname: "	Scarlet FFG	",
        Dry: "	4	",
        wet: "	3	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	 4-5	",
    },
    {
        id: 2,
        number: "8113",
        name: "	妃红 FITR	",
        Enname: "	Cerise FITR	",
        Dry: "	4	",
        wet: "	3	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	 4-5	",
    },
    {
        id: 3,
        number: "8115",
        name: "	枣红 FR2BD	",
        Enname: "	Bordeaux FR2BD	",
        Dry: "	4	",
        wet: "	3	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	 4-5	",
    },
    {
        id: 4,
        number: "8116",
        name: "	红莲 FFRN	",
        Enname: "	Red Violet FFRN	",
        Dry: "	4	",
        wet: "	3	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	 4-5	",
    },
    {
        id: 5,
        number: "8118",
        name: "	桃红 FRB	",
        Enname: "	Pink FRB	",
        Dry: "	4-5	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	 5-6	",
    },
    {
        id: 6,
        number: "8119",
        name: "	洋红 FBB	",
        Enname: "	Rubine FBB	",
        Dry: "	4-5	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	 5-6	",
    },
    {
        id: 7,
        number: "8202",
        name: "	中黄 FG	",
        Enname: "	Medium Yellow FG	",
        Dry: "	4-5	",
        wet: "	4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	 5-6	",
    },
    {
        id: 8,
        number: "8204",
        name: "	金黄 FGR	",
        Enname: "	Golden Yellow FGR	",
        Dry: "	4-5	",
        wet: "	4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	6-7	",
    },
    {
        id: 9,
        number: "8205",
        name: "	金黄 FGR	",
        Enname: "	Golden Yellow FGR	",
        Dry: "	4-5	",
        wet: "	4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	6-7	",
    },
    {
        id: 10,
        number: "8206",
        name: "	橙 FGR	",
        Enname: "	Orange FGR	",
        Dry: "	4-5	",
        wet: "	3-4	",
        water: "	4-5	",
        soap: "	4-5	",
        heat: "	180	",
        light: "	6-7	",
    },
    {
        id: 11,
        number: "8220",
        name: "	嫩黄 F7G	",
        Enname: "	Brilliant Yellow F7G	",
        Dry: "	4-5	",
        wet: "	4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	5-6	",
    },
    {
        id: 12,
        number: "8301",
        name: "	蓝 FFG	",
        Enname: "	Blue FFG	",
        Dry: "	4	",
        wet: "	3	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	7-8	",
    },
    {
        id: 13,
        number: "8302",
        name: "	艳蓝 FBL	",
        Enname: "	Brilliant Blue FBL	",
        Dry: "	4	",
        wet: "	3	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	7-8	",
    },
    {
        id: 14,
        number: "8303",
        name: "	翠蓝 FGB	",
        Enname: "	Turquoise Blue FGB	",
        Dry: "	4	",
        wet: "	3	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	7	",
    },
    {
        id: 15,
        number: "8304",
        name: "	藏青 FR	",
        Enname: "	Navy Blue FR	",
        Dry: "	4	",
        wet: "	3	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	7-8	",
    },
    {
        id: 16,
        number: "8501",
        name: "	黑 FBRN	",
        Enname: "	Black FBRN	",
        Dry: "	4	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	4-5	",
    },
    {
        id: 17,
        number: "8601",
        name: "	绿 FB	",
        Enname: "	Green FB	",
        Dry: "	4	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	7-8	",
    },
    {
        id: 18,
        number: "8603",
        name: "	翠绿 FGB	",
        Enname: "	Turquoise Blue FGB	",
        Dry: "	4	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	6-7	",
    },
    {
        id: 19,
        number: "8701",
        name: "	青莲 FFRN	",
        Enname: "	Violet FFRN	",
        Dry: "	4	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	7-8	",
    },
    {
        id: 20,
        number: "8702",
        name: "	青莲 FFRN	",
        Enname: "	Violet FFRN	",
        Dry: "	4	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	7-8	",
    },
    {
        id: 21,
        number: "8801",
        name: "	棕 FRL	",
        Enname: "	Brown FRL	",
        Dry: "	4	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	4-5	",
    },
    {
        id: 22,
        number: "8001",
        name: "	荧光妃红	",
        Enname: "	Fluo.Cerise	",
        Dry: "	4-5	",
        wet: "	4	",
        water: "	5	",
        soap: "	5	",
        heat: "	160	",
        light: "	 4-5	",
    },
    {
        id: 23,
        number: "8002",
        name: "	荧光桔黄	",
        Enname: "	Fluo.Orange Yellow	",
        Dry: "	4-5	",
        wet: "	4	",
        water: "	5	",
        soap: "	5	",
        heat: "	160	",
        light: "	 4-5	",
    },
    {
        id: 24,
        number: "8003",
        name: "	荧光柠檬黄	",
        Enname: "	Fluo.Lemon Yellow	",
        Dry: "	4-5	",
        wet: "	3-4	",
        water: "	4-5	",
        soap: "	5	",
        heat: "	160	",
        light: "	 4-5	",
    },
    {
        id: 25,
        number: "8004",
        name: "	荧光桔红	",
        Enname: "	Fluo.Orange Red	",
        Dry: "	4-5	",
        wet: "	3-4	",
        water: "	4-5	",
        soap: "	5	",
        heat: "	160	",
        light: "	 4-5	",
    },
    {
        id: 26,
        number: "8005",
        name: "	荧光金黄	",
        Enname: "	Fluo.Golden Yellow	",
        Dry: "	4-5	",
        wet: "	4	",
        water: "	5	",
        soap: "	5	",
        heat: "	160	",
        light: "	 4-5	",
    },
    {
        id: 27,
        number: "8006",
        name: "	荧光绿	",
        Enname: "	Fluo.Green	",
        Dry: "	4-5	",
        wet: "	4	",
        water: "	5	",
        soap: "	5	",
        heat: "	160	",
        light: "	 4-5	",
    },
    {
        id: 28,
        number: "8007",
        name: "	荧光紫	",
        Enname: "	Fluo.Violet	",
        Dry: "	4-5	",
        wet: "	3-4	",
        water: "	4-5	",
        soap: "	4	",
        heat: "	180	",
        light: "	 2-3	",
    },
    {
        id: 29,
        number: "8008",
        name: "	荧光桃红	",
        Enname: "	Fluo.Pink	",
        Dry: "	4-5	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	4	",
        heat: "	140	",
        light: "	 4-5	",
    },
    {
        id: 30,
        number: "8009",
        name: "	荧光宝蓝	",
        Enname: "	Fluo.Blue	",
        Dry: "	4-5	",
        wet: "	4	",
        water: "	4-5	",
        soap: "	4	",
        heat: "	140	",
        light: "	 2-3	",
    },
    {
        id: 31,
        number: "8010",
        name: "	荧光品红	",
        Enname: "	Fluo.Rubine	",
        Dry: "	4-5	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	140	",
        light: "	 4-5	",
    },
    {
        id: 32,
        number: "8011",
        name: "	荧光大红	",
        Enname: "	Fluo.Scarlet	",
        Dry: "	4-5	",
        wet: "	4	",
        water: "	4-5	",
        soap: "	5	",
        heat: "	160	",
        light: "	 4-5	",
    },
    {
        id: 33,
        number: "B111",
        name: "	大红 FFG	",
        Enname: "	Scarlet FFG	",
        Dry: "	4	",
        wet: "	3	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	 4-5	",
    },
    {
        id: 34,
        number: "B113",
        name: "	妃红 FITR	",
        Enname: "	Cerise FITR	",
        Dry: "	4	",
        wet: "	3	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	 4-5	",
    },
    {
        id: 35,
        number: "B115",
        name: "	枣红 FR2BD	",
        Enname: "	Bordeaux FR2BD	",
        Dry: "	4	",
        wet: "	3	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	 4-5	",
    },
    {
        id: 36,
        number: "B116",
        name: "	红莲 FFRN	",
        Enname: "	Red Violet FFRN	",
        Dry: "	4	",
        wet: "	3	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	 4-5	",
    },
    {
        id: 37,
        number: "B118",
        name: "	桃红 FRB	",
        Enname: "	Pink FRB	",
        Dry: "	4-5	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	 5-6	",
    },
    {
        id: 38,
        number: "B119",
        name: "	洋红 FBB	",
        Enname: "	Rubine FBB	",
        Dry: "	4-5	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	 5-6	",
    },
    {
        id: 39,
        number: "B202",
        name: "	中黄 FG	",
        Enname: "	Medium Yellow FG	",
        Dry: "	4-5	",
        wet: "	4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	 5-6	",
    },
    {
        id: 40,
        number: "B204",
        name: "	金黄 FGR	",
        Enname: "	Golden Yellow FGR	",
        Dry: "	4-5	",
        wet: "	4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	6-7	",
    },
    {
        id: 41,
        number: "8205",
        name: "	金黄 FGR	",
        Enname: "	Golden Yellow FGR	",
        Dry: "	4-5	",
        wet: "	4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	6-7	",
    },
    {
        id: 42,
        number: "B206",
        name: "	橙 FGR	",
        Enname: "	Orange FGR	",
        Dry: "	4-5	",
        wet: "	3-4	",
        water: "	4-5	",
        soap: "	4-5	",
        heat: "	180	",
        light: "	6-7	",
    },
    {
        id: 43,
        number: "B220",
        name: "	嫩黄 F7G	",
        Enname: "	Brilliant Yellow F7G	",
        Dry: "	4-5	",
        wet: "	4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	5-6	",
    },
    {
        id: 44,
        number: "B301",
        name: "	蓝 FFG	",
        Enname: "	Blue FFG	",
        Dry: "	4	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	7-8	",
    },
    {
        id: 45,
        number: "B302",
        name: "	艳蓝 FBL	",
        Enname: "	Brilliant Blue FBL	",
        Dry: "	4	",
        wet: "	3	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	7-8	",
    },
    {
        id: 46,
        number: "B303",
        name: "	翠蓝 FGB	",
        Enname: "	Turquoise Blue FGB	",
        Dry: "	4	",
        wet: "	3	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	7	",
    },
    {
        id: 47,
        number: "B304",
        name: "	藏青 FR	",
        Enname: "	Navy Blue FR	",
        Dry: "	4	",
        wet: "	3	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	7-8	",
    },
    {
        id: 48,
        number: "B406",
        name: "	弹性白	",
        Enname: "	Texbinder Elastic White	",
        Dry: "	3	",
        wet: "	3	",
        water: "	 2-3	",
        soap: "	4	",
        heat: "	200	",
        light: "	 6-7	",
    },
    {
        id: 49,
        number: "B501",
        name: "	黑 FBRN	",
        Enname: "	Black FBRN	",
        Dry: "	4	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	4-5	",
    },
    {
        id: 50,
        number: "B601",
        name: "	绿 FB	",
        Enname: "	Green FB	",
        Dry: "	4	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	7-8	",
    },
    {
        id: 51,
        number: "B603",
        name: "	翠绿 FGB	",
        Enname: "	Turquoise Blue FGB	",
        Dry: "	4	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	6-7	",
    },
    {
        id: 52,
        number: "B701",
        name: "	青莲 FFRN	",
        Enname: "	Violet FFRN	",
        Dry: "	4	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	7-8	",
    },
    {
        id: 53,
        number: "B702",
        name: "	青莲 FFRN	",
        Enname: "	Violet FFRN	",
        Dry: "	4	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	7-8	",
    },
    {
        id: 54,
        number: "B801",
        name: "	棕 FRL	",
        Enname: "	Brown FRL	",
        Dry: "	4	",
        wet: "	3-4	",
        water: "	5	",
        soap: "	5	",
        heat: "	180	",
        light: "	4-5	",
    },
];
var _base = {
    createHtml: function () {
        var _html = '';
        base.map((v, i) => {
            // var i =1
            _html += ``
            _html += ` <li id="base${v.id}">
                        <div>${v.number}</div>
                        <div>${v.name}</div>
                        <div>${v.Dry}</div>
                        <div>${v.wet}</div>
                        <div>${v.water}</div>
                        <div>${v.soap}</div>
                        <div>${v.heat}</div>
                        <div>${v.light}</div>
                      </li>`;
            if (v.id == 32) {
                _html += `<li class="title">B系列水性色浆</li>`
            }
            //     if(v.id==27){_html +=`<li class="title">F系列水性色浆</li>`}
            //     if(v.id==38){_html +=`<li class="title">Q系列水性色浆</li>`}
        });
        $('.base').append(_html)
    }
};

//有机材料
var _TL = {
    createHtml: function () {
        var _html = ''
        _toLiao.map((v, i) => {
            // var i =1
            _html += ``
            _html += ` <li id="TL${v.id}">
                        <div><p class="circle" style="background-color: ${v.color};"></p></div>
                                        <div style="width: 125px;">${v.number}</div>
                                        <div>${v.name}</div>
                                        <div>${v.indexs}</div>
                                        <div>${v.structure}</div>
                                        <div>${v.blotter}</div>
                                        <div>${v.PH}</div>
                                        <div>${v.heatproof}</div>
                                        <div>${v.light}</div>
                                        <div>${v.climate}</div>
                                        <div>${v.acidproof}</div>
                                        <div>${v.resisting}</div>
                                        <div>${v.crocking}</div>
                                        <div>${v.removal}</div>
                                        <div>${v.trait}</div>
                      </li>`;
            if (v.id == 29) {
                _html += `<li class="title">水性色浆</li>`
            }
        });
        $('.TL').append(_html)
    }
};
var _SL = {
    createHtml: function () {
        var _html
        _palstic.map((v, i) => {
            var i = 1
            _html += ` <li id="SL${v.id}">
                        <div><p class="circle" style="background-color: ${v.color};"></p></div>
                                        <div style="width: 125px;">${v.number}</div>
                                        <div>${v.name}</div>
                                        <div>${v.indexs}</div>
                                        <div>${v.structure}</div>
                                        <div>${v.blotter}</div>
                                        <div>${v.PH}</div>
                                        <div>${v.heatproof}</div>
                                        <div>${v.light}</div>
                                        <div>${v.climate}</div>
                                        <div>${v.acidproof}</div>
                                        <div>${v.resisting}</div>
                                        <div>${v.alcohol}</div>
                                        <div>${v.removal}</div>
                                        <div>${v.trait}</div>
                      </li>`;
        });
        $('.SL').append(_html)
    }
};
var _PR = {
    createHtml: function () {
        var _html = ''
        _printersInk.map((v, i) => {
            _html += ` <li id=${v.id}>
                        <div><p class="circle" style="background-color: ${v.color};"></p></div>
                                        <div style="width: 125px;">${v.number}</div>
                                        <!--<div>${v.name}</div>-->
                                        <div>${v.indexs}</div>
                                        <div>${v.structure}</div>
                                        <div>${v.blotter}</div>
                                        <div>${v.PH}</div>
                                        <div>${v.heatproof}</div>
                                        <div>${v.light}</div>
                                        <div>${v.climate}</div>
                                        <div>${v.acidproof}</div>
                                        <div>${v.resisting}</div>
                                        <div>${v.alcohol}</div>
                                        <div>${v.removal}</div>
                                        <div>${v.En}</div>
                      </li>`;
            if (v.id == 24) {
                _html += `<li class="title">溶剂墨用有机颜料</li>`
            }
            if (v.id == 42) {
                _html += `<li class="title">胶印墨用有机颜料</li>`
            }
        });
        $('.youmo').append(_html);
    }
};
var initPage = {
    init: function () {
        $(".proDetailsC").eq(0).show();
    },
    showOne: function () {
        var _proD = GetQueryString('proD');
        if (_proD) {
            $(".proDetailsC").hide();
            $(".proDetailsC").eq(_proD).show().siblings().find('.proDetailsC').hide();
        } else {
            $(".proDetailsC").eq(0).show();
        }
    }
};
//添加数据
$(function () {
    var _num = GetQueryString('about');
    switch (parseInt(_num)) {
        case 0:
            $('.talTop>.talTopContent:nth-child(1)').find('.firstNav').addClass('activePro').parent().siblings('.talTopContent').find('.firstNav').removeClass('activePro')
            break;
        case 1:
            // console.log($('.talTop>.talTopContent:nth-child(3)').find('.firstNav').addClass('activePro'))
            $('.talTop>.talTopContent:nth-child(3)').find('.firstNav').addClass('activePro').parent().siblings('.talTopContent').find('.firstNav').removeClass('activePro')
            break;
        case 2:
            $('.talTop>.talTopContent:nth-child(5)').find('.firstNav').addClass('activePro').parent().siblings('.talTopContent').find('.firstNav').removeClass('activePro')
        default:

    }
    if (_num) {
        $(".con").hide();
        $(".con").eq(_num).show().siblings().find('.con').hide();
    } else {
        $(".con").eq(0).show();
    }

    $(".talTopContent").click(function () {
        var num = $(this).attr('data-hide');
        $(".con").hide();
        $(".con").eq(num).show().siblings().find('.con').hide();
    });
    _PR.createHtml();
    _TL.createHtml();
    _SL.createHtml();
    _light.createHtml();
    _base.createHtml();
    initPage.init();
    initPage.showOne();

});


//父类抽象
var parentMobile = function () {
};
//进行初始化，即页面渲染需要的几个数据
parentMobile.prototype.updatePane = function (typeArr, start, pages) {
    var _me = this, _arr = [];
    for (let i = start; i < pages; i++) {
        _arr.push(typeArr[i])
    }
    this.createHtml(_arr)
};
parentMobile.prototype.createHtml = function (v) {
    throw error("错误抛出");
};
parentMobile.prototype.init = function (typeArr, start, pages) {
    this.updatePane(typeArr, start, pages);
}

// var mo = new parentMobile();
var _mobileP = function () {
};
//组合继承方法，通过调用父类构造函数，继承父类的属性保留传参优点，然后通过将父类实例作为子类原型，实现函数复用
_mobileP.prototype = new parentMobile();
//调用通过原型链进行调用
_mobileP.prototype.createHtml = function (v) {
    console.log(2)
    //判断是否有可渗透性
    var _ty = v[1].crocking;
    //进行添加html
    var _html = '';
    _html = `
<table class="table tableMobile">
  <thead>
    <tr>`
    _html += `<th><div class="circleMo"></div><p>丽王牌号</p></th>`;
    v.map((v, i) => {
        _html += `<th><div class="circle" style="background-color: ${v ? v.color : ''}"></div><p>${v ? v.number : ''}</p></th> `;
    });
    _html += `</tr>
  </thead>
  <tbody>
    <tr>
      <td>中文名称</td>`
    v.map((v, i) => {
        _html += `<td>${v ? v.name : ''}</td>`;
    })
    _html += ` </tr>
     <tr>
      <td>索引号</td>`
    v.map((v, i) => {
        _html += ` <td>${v ? v.indexs : ''}</td>`
    })
    _html += `</tr>
     <tr>
      <td>结构索引号</td>`
    v.map((v, i) => {
        _html += ` <td>${v ? v.structure : ''}</td>`
    })
    _html += `</tr>
     <tr>
      <td>吸油量</td>`
    v.map((v, i) => {
        _html += ` <td>${v ? v.blotter : ''}</td>`
    })
    _html += `</tr>
     <tr>
      <td>PH</td>`
    v.map((v, i) => {
        _html += ` <td>${v ? v.PH : ''}</td>`
    })
    _html += `</tr>
     <tr>
      <td>耐温</td>`
    v.map((v, i) => {
        _html += ` <td>${v ? v.heatproof : ''}</td>`
    })
    _html += `</tr>
     <tr>
      <td>耐光</td>`
    v.map((v, i) => {
        _html += ` <td>${v ? v.light : ''}</td>`
    })
    _html += `</tr>
     <tr>
      <td>耐候</td>`
    v.map((v, i) => {
        _html += ` <td>${v ? v.climate : ''}</td>`
    })
    _html += `</tr> <tr>
      <td>耐酸</td>`
    v.map((v, i) => {
        _html += ` <td>${v ? v.acidproof : ''}</td>`
    })
    _html += `</tr> <tr>
      <td>耐碱</td>`
    v.map((v, i) => {
        _html += ` <td>${v ? v.resisting : ''}</td>`
    })

    if (_ty) {
        _html += `</tr>
     <tr>
      <td>耐渗色</td>`
        v.map((v, i) => {
            _html += ` <td>${v ? v.crocking : ''}</td>`
        });
    } else {
        _html += `</tr>
     <tr>
      <td>耐乙醇</td>`
        v.map((v, i) => {
            _html += ` <td>${v ? v.alcohol : ''}</td>`
        });
    }
    _html += ` </tr>
     <tr>
      <td>耐迁移性</td>`
    v.map((v, i) => {
        _html += ` <td>${v ? v.removal : ''}</td>`
    });
    _html += `</tr>
     <tr>
      <td>性能特点</td>`
    v.map((v, i) => {
        _html += ` <td>${v ? v.trait : ''}</td>`
    });
    _html += `</tr>  
  </tbody>
</table>
`;
    $('.mobileTable').html(_html);

};
//开始进行方法的初始化


//手机端产品信息，有机颜料
var _mobilePro = {
    updatePanel: function (typeArr, start, pages) {
        var _me = this, _arr = [];
        for (let i = start; i < pages; i++) {
            _arr.push(typeArr[i])
        }
        _me.createHtml(_arr)
    },
    createHtml: function (v) {
        if (v[1]) {
            var _ty = v[1].crocking;
        }
        var _html;
        _html = `
<table class="table tableMobile">
  <thead>
    <tr>`
        _html += `<th><div class="circleMo"></div><p>丽王牌号</p></th>`;
        v.map((v, i) => {
            _html += `<th><div class="circle" style="background-color: ${v ? v.color : ''}"></div><p>${v ? v.number : ''}</p></th> `;
        });
        _html += `</tr>
  </thead>
  <tbody>
    <tr>
      <td>中文名称</td>`
        v.map((v, i) => {
            _html += `<td>${v ? v.name : '-'}</td>`;
        })
        _html += ` </tr>
     <tr>
      <td>索引号</td>`
        v.map((v, i) => {
            _html += ` <td>${v ? v.indexs : '-'}</td>`
        })
        _html += `</tr>
     <tr>
      <td>结构索引号</td>`
        v.map((v, i) => {
            _html += ` <td>${v ? v.structure : '-'}</td>`
        })
        _html += `</tr>
     <tr>
      <td>吸油量</td>`
        v.map((v, i) => {
            _html += ` <td>${v ? v.blotter : '-'}</td>`
        })
        _html += `</tr>
     <tr>
      <td>PH</td>`
        v.map((v, i) => {
            _html += ` <td>${v ? v.PH : '-'}</td>`
        })
        _html += `</tr>
     <tr>
      <td>耐温</td>`
        v.map((v, i) => {
            _html += ` <td>${v ? v.heatproof : '-'}</td>`
        })
        _html += `</tr>
     <tr>
      <td>耐光</td>`
        v.map((v, i) => {
            _html += ` <td>${v ? v.light : '-'}</td>`
        })
        _html += `</tr>
     <tr>
      <td>耐候</td>`
        v.map((v, i) => {
            _html += ` <td>${v ? v.climate : '-'}</td>`
        })
        _html += `</tr> <tr>
      <td>耐酸</td>`
        v.map((v, i) => {
            _html += ` <td>${v ? v.acidproof : '-'}</td>`
        })
        _html += `</tr> <tr>
      <td>耐碱</td>`
        v.map((v, i) => {
            _html += ` <td>${v ? v.resisting : ''}</td>`
        })

        if (_ty) {
            _html += `</tr>
     <tr>
      <td>耐渗色</td>`
            v.map((v, i) => {
                _html += ` <td>${v ? v.crocking : '-'}</td>`
            });
        } else {
            _html += `</tr>
     <tr>
      <td>耐乙醇</td>`
            v.map((v, i) => {
                _html += ` <td>${v ? v.alcohol : '-'}</td>`
            });
        }
        _html += ` </tr>
     <tr>
      <td>耐迁移性</td>`
        v.map((v, i) => {
            _html += ` <td>${v ? v.removal : '-'}</td>`
        });
        _html += `</tr>
     <tr>
      <td>性能特点</td>`
        v.map((v, i) => {
            _html += ` <td>${v ? v.trait : '-'}</td>`
        });
        _html += `</tr>  
  </tbody>
</table>
`;
        $('.mobileTable').html(_html);
    },
};

var _mobileLight = {
    updatePanel: function (typeArr, start, pages) {
        var _me = this, _arr = [];
        for (let i = start; i < pages; i++) {
            _arr.push(typeArr[i])
        }
        _me.createHtml(_arr)
    },
    createHtml: function (v) {
        console.log(v);
        var _html = '';
        _html += `<ul class="lightMaterials ">
        <li>丽王牌号</li>
        <li>中文名称</li>
        <li  class="rub"><div>摩擦</div><div><span>干磨</span><span>湿磨</span></div></li>
        <li class="rub"><div>洗涤</div><div><span>水洗</span><span>皂洗</span></div></li>
         <li>耐热性(℃)</li>
         <li>耐光性</li>
</ul><ul class="lightProduct">`
        v.map((v, i) => {
            _html += `<li>
  <div>${v ? v.number : '-'}</div>
                        <div>${v ? v.name : "-"}</div>
                        <div>${v ? v.Dry : "-"}</div>
                        <div>${v ? v.wet : "-"}</div>
                        <div>${v ? v.water : "-"}</div>
                        <div>${v ? v.soap : "-"}</div>
                        <div>${v ? v.heat : "-"}</div>
                        <div>${v ? v.light : "-"}</div>
</li>`
        });
        _html += `
</ul>
`;
        $('.mobileTable').html(_html);
    }
};

var _mobileFluorescent = {
    init: function () {
    },
    createHtml: function () {

    }
};
//手机端页面加载之后加载
$(function () {
    var _prD = GetQueryString('proD');
    //手机端进入为有机颜料,
    if (!_prD) {
        // _mobilePro.updatePanel(_printersInk, 0, 3);
        // pagesObj(_printersInk,'',_mobilePro);
        var _about = GetQueryString('about');
        if (parseInt(_about) == 0) {
            _mobilePro.updatePanel(_printersInk, 0, 3);
            pagesObj(_printersInk, '', _mobilePro)
        }
        if (parseInt(_about) == 1) {
            _mobilePro.updatePanel(_toLiao, 0, 3);
            pagesObj(_toLiao, '', _mobilePro)
        }
        if (parseInt(_about) == 2) {
            _mobilePro.updatePanel(_palstic, 0, 3);
            pagesObj(_palstic, '', _mobilePro)
        }
    }
    //进入为荧光颜料
    if (_prD == 1) {
        var _type = parseInt(GetQueryString('type'));
        switch (_type) {
            //LFB系列有机颜料
            case 1:
                break;
            //LD系列有机颜料
            case 2:
                break;
            //LFL系列有机颜料
            case 3:
                break;
            //LPA系列有机颜料
            case 4:
                break;
        }
    }
    //进入为水性颜料
    if (_prD == 2) {
        var _type = parseInt(GetQueryString('type'));
        switch (_type) {
            case 1:
                _mobileLight.updatePanel(base.slice(0, 32), 0, 3);
                pagesObj(base.slice(0, 32), '', _mobileLight);
                break;
            case 2:
                _mobileLight.updatePanel(base.slice(32, base.length), 0, 3);
                pagesObj(base.slice(32, base.length), '', _mobileLight);
        }
    }

    // $(window).resize(function () {
    //     var _aboutHt = $(window).width();
    //     var pageCount;
    //     // 有机颜料初始化进入
    //     if (_aboutHt <= 1024) {
    //         // 初始进入页面;
    //         _mobilePro.updatePanel(_printersInk, 0, 3);
    //         pagesObj(_printersInk);
    //         var _about = GetQueryString('about');
    //         if (parseInt(_about) == 0) {
    //             _mobilePro.updatePanel(_printersInk, 0, 3);
    //             pagesObj(_printersInk)
    //         }
    //         if (parseInt(_about) == 1) {
    //             _mobilePro.updatePanel(_toLiao, 0, 3);
    //             pagesObj(_toLiao)
    //         }
    //         if (parseInt(_about) == 2) {
    //             _mobilePro.updatePanel(_palstic, 0, 3);
    //             pagesObj(_palstic)
    //         }
    //     }
    // });
});

//PC搜索
$(function () {
    var _val = GetQueryString('val');
    if (_val) {
        let toObj1 = _printersInk.find(item => item.number == _val);
        let toObj2 = _toLiao.find(item => item.number == _val);
        let toObj3 = _palstic.find(item => item.number == _val);
        let toObj4 = light.find(item => item.number == _val);
        let toObj5 = base.find(item => item.number == _val);
        if (toObj1) {
            $('.navClick>li[data-type=1]').addClass('activeH').siblings().removeClass('activeH');
            $(".proDetailsC").eq(0).show().siblings().find('.proDetailsC').hide();
            $(".con").eq(0).show().siblings().find('.con').hide();
            $('.talTop>.talTopContent:nth-child(1)>a').addClass('activePro').parent().siblings().find('a').removeClass('activePro');
            window.location.hash = `${toObj1.id - 4}`
        } else if (toObj2) {
            $(".proDetailsC").eq(0).show().siblings().find('.proDetailsC').hide();
            $(".con").eq(1).show().siblings().find('.con').hide();
            $('.talTop>.talTopContent:nth-child(3)>a').addClass('activePro').parent().siblings().find('a').removeClass('activePro');
            window.location.hash = `TL${toObj2.id - 4}`
        } else if (toObj3) {
            $(".proDetailsC").eq(0).show().siblings().find('.proDetailsC').hide();
            $(".con").eq(2).show().siblings().find('.con').hide();
            $('.talTop>.talTopContent:nth-child(5)>a').addClass('activePro').parent().siblings().find('a').removeClass('activePro');
            window.location.hash = `SL${toObj3.id - 4}`
        } else if (toObj4) {
            console.log(1);
            $(".proDetailsC").eq(0).hide();
            $(".proDetailsC").eq(1).show().siblings().find('.proDetailsC').hide();
            window.location.hash = `light${toObj4.id - 4}`
        } else if (toObj5) {
            console.log(2);
            $(".proDetailsC").eq(0).hide();
            $(".proDetailsC").eq(2).show().siblings().find('.proDetailsC').hide();
            window.location.hash = `base${toObj5.id - 4}`
        }
    } else {
        $('.search img').click(function () {
            var _val = $('.search input').val();
            let toObj1 = _printersInk.find(item => item.number == _val);
            let toObj2 = _toLiao.find(item => item.number == _val);
            let toObj3 = _palstic.find(item => item.number == _val);
            if (toObj1) {
                $(".con").eq(0).show().siblings().find('.con').hide();
                $(".con").eq(2).hide();
                $(".con").eq(1).hide();
                window.location.hash = `${toObj1.id - 4}`
            } else if (toObj2) {
                $(".con").eq(1).show().siblings().find('.con').hide();
                $(".con").eq(0).hide();
                $(".con").eq(2).hide();

                window.location.hash = `TL${toObj2.id - 4}`
            } else if (toObj3) {
                $(".con").eq(2).show().siblings().find('.con').hide();
                $(".con").eq(0).hide();
                $(".con").eq(1).hide();
                window.location.hash = `SL${toObj3.id - 4}`
            }
        })
    }

});

//分页初始化
function pagesObj(typeArr, obj, typeFun) {
    pageCount = Math.ceil(typeArr.length / 3);
    icon_load(pageCount, obj ? Math.ceil(obj / 3) : '');
    //点击分页按钮触发
    $(document).on("click", "#pageGro li", function () {
        var pageNum = parseInt($(this).html());//获取当前页数
        var selector = $(this);
        num_click(pageCount, pageNum, selector);
        typeFun.updatePanel(typeArr, pageNum * 3 - 3, pageNum * 3)
    });
    //点击上一页触发
    $(document).on("click", "#pageGro .pageUp", function () {
        var pageNum = parseInt($("#pageGro li.on").html());//获取当前页
        var index = $("#pageGro ul li.on").index();//获取index
        typeFun.updatePanel(typeArr, (pageNum - 1) * 3 - 3, (pageNum - 1) * 3);
        pageUp_click(pageCount, pageNum, index);
    });
    //点击下一页触发
    $(document).on("click", "#pageGro .pageDown", function () {
        var pageNum = parseInt($("#pageGro li.on").html());//获取当前页
        var index = $("#pageGro ul li.on").index();//获取index
        pageDown_click(pageCount, pageNum, index);
        typeFun.updatePanel(typeArr, (pageNum + 1) * 3 - 3, (pageNum + 1) * 3)
    });
}

//手机端的产品搜索
$(function () {
    var _val = GetQueryString('MobileVal');
    if (_val) {
        let toObj1 = _printersInk.find(item => item.number == _val);
        let toObj2 = _toLiao.find(item => item.number == _val);
        let toObj3 = _palstic.find(item => item.number == _val);
        let toObj4 = base.find(item => item.number == _val);
        if (toObj1) {
            _mobilePro.updatePanel(_printersInk, Math.ceil(toObj1.id / 3) * 3 - 3, Math.ceil(toObj1.id / 3) * 3);
            pagesObj(_printersInk, toObj1.id, _mobilePro)
        } else if (toObj2) {
            _mobilePro.updatePanel(_toLiao, Math.ceil(toObj1.id / 3) * 3 - 3, Math.ceil(toObj1.id / 3) * 3);
            pagesObj(_toLiao, toObj2.id, _mobilePro)
        } else if (toObj3) {
            _mobilePro.updatePanel(_palstic, Math.ceil(toObj1.id / 3) * 3 - 3, Math.ceil(toObj1.id / 3) * 3);
            pagesObj(_palstic, toObj3.id, _mobilePro)
        } else if (toObj4) { //水性色浆
            if (parseInt(toObj4.id) <= 32) {
                _mobileLight.updatePanel(base.slice(0, 32), Math.ceil(toObj4.id / 3) * 3 - 3, Math.ceil(toObj4.id / 3) * 3);
                pagesObj(base.slice(0, 32), toObj4.id, _mobileLight);
            } else if (parseInt(toObj4.id) > 32) {
                var _id = toObj4.id - 32;
                _mobileLight.updatePanel(base.slice(32, base.length), Math.ceil(_id / 3) * 3 - 3, Math.ceil(_id / 3) * 3);
                pagesObj(base.slice(32, base.length), _id, _mobileLight);
            }
        }
    }
});


