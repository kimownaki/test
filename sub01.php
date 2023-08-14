<?php require_once $_SERVER['DOCUMENT_ROOT']."/inc/header.php"; ?>
<body class="sub">
<?php require_once $_SERVER['DOCUMENT_ROOT']."/inc/top.php"; ?>

<main>
	<section class="paging">
		<div class="title">
			현장위치
			<div class="eng">LOCATION</div>
			<div class="edge"></div>
		</div>
	</section>
	<section class="contents s01">
		<h1>신목동 비바힐스</h1>
		<h2>여의도가 10분으로 가까워집니다.</h2>
		<div class="locationMap">
			<!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6272105169037!2d126.835411151396!3d37.5167096797082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9dbd6c488baf%3A0x8c296faa2a0dd7f5!2z7ISc7Jq47Yq567OE7IucIOyWkeyynOq1rCDsi6Dsm5Trj5kg7Iug7JuU66GcIDEyMw!5e0!3m2!1sko!2skr!4v1621016989187!5m2!1sko!2skr" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>-->$_COOKIE<!-- * 카카오맵 - 지도퍼가기 -->
<!-- 1. 지도 노드 -->
<div id="daumRoughmapContainer1621494189522" class="root_daum_roughmap root_daum_roughmap_landing" style="width:100%"></div>

<!--
	2. 설치 스크립트
	* 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
-->
<script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>

<!-- 3. 실행 스크립트 -->
<script charset="UTF-8">
	new daum.roughmap.Lander({
		"timestamp" : "1621494189522",
		"key" : "25um4",
		"mapHeight" : "400"
	}).render();
</script>
		</div>
	</section>
	<?php require_once $_SERVER['DOCUMENT_ROOT']."/inc/footer.php"; ?>
</main>

<?php require_once $_SERVER['DOCUMENT_ROOT']."/inc/tel.php"; ?>
</body>
</html>
