<?php require_once $_SERVER['DOCUMENT_ROOT']."/inc/header.php"; ?>
<body class="sub">
<?php require_once $_SERVER['DOCUMENT_ROOT']."/inc/top.php"; ?>

<main>
	<section class="paging">
		<div class="title">
			홍보관 위치
			<div class="eng">MODEL HOUSE LOCATION</div>
			<div class="edge"></div>
		</div>
	</section>
	<section class="contents s01">
		<h1>비바힐스 홍보관</h1>
		<h2>서울시 양천구 신월로 358 2층</h2>
		<div class="locationMap">
			<!--<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.413593650957!2d126.8586651158384!3d37.52174663444868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357c9dd3db276c13%3A0x53ac04b2dfc5d11e!2z7ISc7Jq47Yq567OE7IucIOyWkeyynOq1rCDsi6DsoJXrj5kg7Iug7JuU66GcIDM1OA!5e0!3m2!1sko!2skr!4v1621069516695!5m2!1sko!2skr" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy"></iframe>-->$_COOKIE<!-- * 카카오맵 - 지도퍼가기 -->
<!-- 1. 지도 노드 -->
<div id="daumRoughmapContainer1621495139171" class="root_daum_roughmap root_daum_roughmap_landing" style="width:100%"></div>

<!--
	2. 설치 스크립트
	* 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다.
-->
<script charset="UTF-8" class="daum_roughmap_loader_script" src="https://ssl.daumcdn.net/dmaps/map_js_init/roughmapLoader.js"></script>

<!-- 3. 실행 스크립트 -->
<script charset="UTF-8">
	new daum.roughmap.Lander({
		"timestamp" : "1621495139171",
		"key" : "25ums",
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
