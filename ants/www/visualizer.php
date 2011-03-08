<?php include "header.php"; ?>

<div id="visualizerDiv"></div>

<?php include "footer.php"; ?>

<!--[if lt IE 9]><script src="visualizer/js/excanvas.js"></script><![endif]-->
<script type="text/javascript" src="visualizer/js/visualizer.js"></script>
<script type="text/javascript">
<?php
ob_start();
include('game_info.php');
$data = ob_get_clean();
$data = htmlspecialchars($data, ENT_COMPAT); // encode '<', '>', '&' and '"'
$data = str_replace("\\", "\\\\", $data);    // escape eixsting back slashes
$data = str_replace("\n", "\\n", $data);     // escape line breaks (must be Unix!)
?>
visualizer = new Visualizer(document.getElementById('visualizerDiv'), 'visualizer/', 'visualizer/java/', 640, undefined);
visualizer.loadReplayDataFromPHP("<?php echo $data ?>");
</script>
