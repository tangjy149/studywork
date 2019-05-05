package service.impl;

import dao.LoginDao;
import entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import service.LoginService;

@Service
public class LoginServiceImpl implements LoginService {
    @Autowired
    private LoginDao loginDao;

    @Override
    public boolean login(String name,String password){
        User user = new User();
        user.setName(name);
        user.setPassword(password);
        int u = loginDao.login(user);
        if(u != 1)
            return false;
        else
            return true;
    }
}
