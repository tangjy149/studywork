package com.bluemsun.answerapp.service;

import com.bluemsun.answerapp.entity.CourseBean;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by tangjy on 25.
 * @author tangjy.
 */
@Service
public interface CourseService {
    public List<CourseBean> getAllCourseService();
}
