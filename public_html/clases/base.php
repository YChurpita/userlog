<?php
class DataBase {
 
      private $host;
      private $user;
      private $passwd;
      private $dbname;
      private $stconnect;
      
//-----------------------------------------------------------------------------      
    public function setDBname($aVal){
        $this->dbname=$aVal;
    }
//-----------------------------------------------------------------------------
    public function setConnectParam($host,$users,$passw,$dbn ){
        $this->host=$host;
        $this->user=$users;
        $this->passwd=$passw;
        $this->dbname=$dbn;
    }    
   // 'mysql:host=localhost;dbname=test
//-----------------------------------------------------------------------------    
    public function connectDbaServ(){
        try {        
            $this->stconnect= new PDO("mysql:host=".$this->host.";dbname=".$this->dbname, $this->user, $this->passwd);
           
            } catch (PDOException $e) {
              echo '10010';
            }    
    }
//-----------------------------------------------------------------------------    
    public function createDBA(){
        $this->stconnect->exec("CREATE DATABASE ".$this->dbname);
   
      }


    public function createClientTable(){
       try{
        $this->stconnect->exec("            
            CREATE TABLE `uselog` (
                        `ip` varchar(20) DEFAULT NULL,
                        `datecon` date DEFAULT NULL,
                        `msizew` int(11) DEFAULT NULL,
                        `msizeh` int(11) DEFAULT NULL,
                        `bmsizew` int(11) DEFAULT NULL,
                        `bsizeh` int(11) DEFAULT NULL,
                        `osname` varchar(30) DEFAULT NULL,
                        `BrwserName` varchar(30) DEFAULT NULL,
                        `BrwserVers` varchar(30) DEFAULT NULL
                       ) ENGINE=MyISAM DEFAULT CHARSET=utf8; 
            CREATE TABLE `userlog_bip` (
            `ip` varchar(20) DEFAULT NULL
            ) ENGINE=MyISAM DEFAULT CHARSET=utf8;");
         }catch (PDOException $e) {
          echo '10025';  
        } 
    }  
//-------------------------------Проверяем есть ли такие регистрационные данные-
private function getIp($in_ip, $in_datecon){
$stm= $this->stconnect->query( "SELECT *  FROM uselog WHERE ip='".$in_ip."' or datecon='".$in_datecon."'; "); 
if ($stm->fetchColumn() > 0) {
            return false;
        } else{
            return true; 
       }
           
}   
//------------------------------------------------------------------------------
private function getBlockIp($in_ip ){
$stm= $this->stconnect->query( "SELECT *  FROM userlog_bip WHERE ip='".$in_ip."'; "); 
if ($stm->fetchColumn() > 0) {
            return false;
        } else{
            return true; 
       }
           
} 
//------------------------------------------------------------------------------    
    public function  addConnect($in_ip, $in_datecon, $in_msizew, $in_msizeh, $in_bmsizew, $in_bsizeh, $in_osname, $in_BrwserName, $in_BrwserVers){
      if ($this->getIp($in_ip, $in_datecon) and $this->getBlockIp($in_ip)){  // если такого ip нет и в таблице игнора тоже нет то инсерт
      try{ $stm=  $this->stconnect->prepare("INSERT INTO uselog (ip, datecon,msizew,msizeh,bmsizew,bsizeh,osname,BrwserName,BrwserVers)
                                        VALUES (:in_ip, :in_datecon, :in_msizew, :in_msizeh, :in_bmsizew, :in_bsizeh, :in_osname, :in_BrwserName, :in_BrwserVers)");
           $stm->bindParam(':in_ip', $in_ip);
           $stm->bindParam(':in_datecon', $in_datecon);
           $stm->bindParam(':in_msizew', $in_msizew);
           $stm->bindParam(':in_msizeh',$in_msizeh);  
           $stm->bindParam(':in_bmsizew',$in_bmsizew);  
           $stm->bindParam(':in_bsizeh',$in_bsizeh);  
           $stm->bindParam(':in_osname',$in_osname);  
           $stm->bindParam(':in_BrwserName',$in_BrwserName);  
           $stm->bindParam(':in_BrwserVers',$in_BrwserVers);  
           $stm->execute();
           return true;
        }catch (PDOException $e) {
          echo '10030';  
        }    
    } else {
      echo('10050');
    }
    
    
 } 
//------------------------------------------------------------------------------    
}
?>