package com.bluemsun.answerapp.service;

import com.bluemsun.answerapp.entity.UserBean;
import org.springframework.stereotype.Service;

/**
 * Created by tangjy on 25.
 * @author tangjy.
 */
@Service
public interface UserService {
    UserBean getUserByPwdAndUsername(String username, String pwd);
}
