# Lab11文档
* **Cookie：**  
  setcookie(): 用于设置cookie；  
  $_COOKIE变量用于取回cookie的值。  
    
  **优点：** cookie可以设置过期时间，在到期前，再次打开网站cookie仍有效，变量信息存储在客户端，不占用服务器的资源，响应速度快；  
  **缺点：** 变量信息存储在客户端，因此cookie的安全性相对较差，而且如果浏览器禁用cookie，也会导致会话失败。
* **Session：**  
  session_start(): 用于启动session；  
  $_SESSION用于存储和读取session的值。  
    
  **优点：** session是存储在服务器的，相对比cookie要安全，且方便控制；  
  **缺点：** 占用服务器资源。