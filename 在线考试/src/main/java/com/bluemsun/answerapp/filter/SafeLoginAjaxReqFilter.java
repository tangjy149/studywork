package com.bluemsun.answerapp.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Created by tangjy on 7.
 * @author tangjy.
 */
public class SafeLoginAjaxReqFilter implements Filter {
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {

    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        HttpServletRequest request=(HttpServletRequest) servletRequest;
        HttpServletResponse response=(HttpServletResponse)servletResponse;
        Object session=request.getSession().getAttribute("user");
        if(session!=null){
            filterChain.doFilter(servletRequest,servletResponse);
        }else {
            String url=request.getRequestURI();
            String tempStr=null;
            try {
                tempStr = url.substring(url.indexOf("/", 1) + 1, url.indexOf("/", url.indexOf("/", 1) + 1));
            }catch (Exception e){
                request.getRequestDispatcher("/error.html").forward(request, response);
                return;
            }
            if (tempStr.equals("teacher")) {
                request.getRequestDispatcher("/error.html").forward(request, response);
                return;
            }else if(tempStr.equals("student")){
                request.getRequestDispatcher("/index.html").forward(request, response);
                return;
            }else{
                request.getRequestDispatcher("/error.html").forward(request, response);
                return;
            }


        }
    }

    @Override
    public void destroy() {

    }
}
