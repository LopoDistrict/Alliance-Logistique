<?php

header('Content-Type: application/json');
include_once('db.php');
include_once('lib/get_session_info.php');

$data = json_decode(file_get_contents("php://input"), true);
$session_id = $data['session_id'];
$ip = $data['ip']; // ces valeurs seront déja hashé par le front
$device_num = $data['device_num'];;
$last_id = 0;

try{
    $get_id = $conn->prepare("SELECT MAX(id_log) FROM LOG_USER");
    $get_id->execute();
    $last_id = $get_id->get_result();
}catch(Exception $e) {
    echo json_encode(['error' => $e->getMessage()]);
}

try{
    $stmt = $conn->prepare("INSERT INTO LOG_USER (id_log, ip_log, device_num_client, id_user) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("sssi", $last_id, $ip, $device_num, $id);
    $stmt->execute();
    $stmt->close();
    echo json_encode(['ok' => $last_id]);
}catch(Exception $e){
    echo json_encode(['err' => $e->getMessage()]);
}


echo json_encode(['status' => 'log_created']);
?>