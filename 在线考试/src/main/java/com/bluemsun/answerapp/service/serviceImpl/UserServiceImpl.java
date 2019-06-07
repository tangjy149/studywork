package com.bluemsun.answerapp.service.serviceImpl;

import com.bluemsun.answerapp.dao.UserDaoInterface;
import com.bluemsun.answerapp.entity.UserBean;
import com.bluemsun.answerapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * Created by tangjy on 25.]
 * @author tangjy.
 */
@Service
public class UserServiceImpl implements UserService{
    @Autowired
    UserDaoInterface userDaoInterface;

    @Override
    public UserBean getUserByPwdAndUsername(String username, String pwd) {
        return userDaoInterface.getUserByPwdAndUsernameDao(username,pwd);
    }
}
