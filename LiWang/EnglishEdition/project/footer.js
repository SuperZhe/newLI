(function () {
    document.write(`<link rel="stylesheet" href="../style/footer.css">`)
})();
var _footer = `
    <footer class="PCfooter">
    <div class="container">
        <div class="row">
            <div class="col-sm-2 col-md-2 col-lg-2 col-xs-2">
                <div class="Lw-logo"><img src="../images/logo.png" alt="图片加载失败" ></div>
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2 col-xs-2">
                <h3>Organic Pigments</h3>
                    <p><span></span><a href="../product.html?about=0" style="color:#676767;">Ink organic pigments</a></p>
      <p><span></span><a href="../product.html?about=1" style="color:#676767;">Organic pigments for plastics</a></p>
      <p><span></span><a href="../product.html?about=2" style="color:#676767;">Organic pigments for paints</a></p>
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2 col-xs-2">
                <h3>Fluorescent Pigments</h3>
                <p>Aqueous fluorescent pigment</p>
                <p>Plastic fluorescent pigment</p>
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2 col-xs-2">
                <h3>Sejiang</h3>
                <p>8 series of water-based paste</p>
                <p>B series of water-based paste</p>
                <p>F series of water-based paste</p>
                <p>Q series of water-based paste</p>
            </div>
            <div class="col-sm-2 col-md-2 col-lg-2 col-xs-2 col-sm-offset-2 col-md-offset-2 col-lg-offset-2">
                <img src="../images/share.png" alt="图片加载失败" class="WeChat">
            </div>
            <div class="col-lg-offset-2 col-md-offset-2 col-sm-offset-2 friendship">
                    <span>link：</span>
                    <a href="javascriot:;">Built-in shutter shade</a>
                    <a href="javascriot:;">Industrial microbicides</a>
                    <a href="javascriot:;">Gesso line</a>
                    <a href="javascriot:;">Color tile paint</a>
                    <a href="javascriot:;">Industrial aluminium profile</a>
                    <a href="javascriot:;">The hotel 4 times</a>
            </div>
        </div>
        </div>
        <div class="provide ">
        <div class="col-sm-10 col-md-10 col-xs-10 col-lg-10 col-sm-offset-1 col-md-offset-1 col-lg-offset-1">
            <span>
		Li Wang dedicated to provide you with: organic pigments, ink organic pigments, plastics with organic pigments, paints with organic pigments
		</span>
            <span>
		Phone: 0513-86592888-811 Company Address: Yancheng City, Jiangsu Province, Funing Aoyang Industrial Park Chang-bis Avenue
		   
		Copyright: Jiangsu Li Wang Technology Co., Ltd. Technical Support: Yonh Yan Technology
		</span>
        </div>
        </div>
    
</div>
     </footer>`
var _selfAdaption = `
<div class="_selfAdaption">
<div class="accordion" data-toggle="collapse" data-target="#content"><a href="javascript:;">Organic Pigments</a><i>+</i></div>  
    <ul class="foot collapse" id="content">
      <li><span></span><a href="../product.html?about=0">Ink organic pigments</a></li>
      <li><span></span><a href="../product.html?about=1">Organic pigments for plastics</a></li>
      <li><span></span><a href="../product.html?about=2">Organic pigments for paints</a></li>
    </ul>
   <div class="accordion" data-toggle="collapse" data-target="#content-7"><a href="javascript:;">Fluorescent Pigments</a><i>+</i></div>  

    <ul class="foot collapse" id="content-7">
        <li>Aqueous fluorescent pigment</li>
        <li>Plastic fluorescent pigment</li>
    </ul>
   <div class="accordion" data-toggle="collapse" data-target="#content-8"><a href="javascript:;">Sejiang</a><i>+</i></div>  
    <ul class="foot collapse" id="content-8">
        <li>8 series of water-based paste</li>
        <li>B series of water-based paste</li>
        <li>F series of water-based paste</li>
        <li>Q series of water-based paste</li>
    </ul>
   <div class="WeChat-mob">
   <img src="../images/share.png" alt="图片加载失败">
</div>
  <div class="friendship-mob">
                   <p>link：</p>
                    <a href="javascriot:;">Built-in shutter shade</a>
                    <a href="javascriot:;">Industrial microbicides</a>
                    <a href="javascriot:;">Gesso line</a>
                    <a href="javascriot:;">Color tile paint</a>
                    <a href="javascriot:;">Industrial aluminium profile</a>
                    <a href="javascriot:;">The hotel 4 times</a>
    </div>
</div>`


$(function () {
    $('body').append(_selfAdaption)
    $('body').append(_footer)
    //点击加好变为减号
    var _c = true
    $('.accordion').click(function () {
        _c = !_c;
        if(_c){
            $(this).find('i').html('+')
        }else{
            $(this).find('i').html('-')
        }
    })
});