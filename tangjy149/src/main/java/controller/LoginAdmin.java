package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import service.LoginService;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@Controller
public class LoginAdmin {
    @Autowired
    private LoginService loginService;

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    @ResponseBody
    public Map<String, Object> Login(javax.servlet.http.HttpServletRequest request, javax.servlet.http.HttpServletResponse response) throws javax.servlet.ServletException, IOException {
        String name = request.getParameter("name");
        String password = request.getParameter("password");
        boolean isSucceed = loginService.login(name, password);
        Map<String, Object> map = new HashMap<>();
        if (isSucceed == true) {
            System.out.println("登录成功");

            map.put("name", name);
            map.put("password", password);
            map.put("success", true);
            map.put("Msg", "登录成功");
            //request.getRequestDispatcher("Admin.jsp").forward(request, response);
            //response.getWriter().print("<script language='javascript'>alert('登陆成功！');location.replace('http://localhost:8080/index.jsp');</script>");
        } else {
            System.out.println("登录失败");
            // request.getRequestDispatcher("login.jsp").forward(request, response);
            //response.getWriter().print("<script language='javascript'>alert('登陆失败！用户名或密码错误！');location.replace('http://localhost:8080/index.jsp');</script>"); }
            map.put("success", false);
            map.put("Msg", "登录失败");
        }
        return map;
    }
}
