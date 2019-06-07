package com.bluemsun.answerapp.dao;

import com.bluemsun.answerapp.entity.CourseBean;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * Created by tangjy on 25.
 * @author tangjy.
 */
@Repository
public interface CourseDao {
    List<CourseBean> getAllCourseDao();
}
