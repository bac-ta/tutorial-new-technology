package com.graphql.security.entrypoint;

import com.graphql.constant.APIMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author bac-ta
 */
@Component
public class JwtAuthenticationEntryPoint implements AuthenticationEntryPoint {

    private static final Logger logger = LoggerFactory.getLogger(JwtAuthenticationEntryPoint.class);

    @Override
    public void commence(HttpServletRequest httpServletRequest,
                         HttpServletResponse httpServletResponse,
                         AuthenticationException e) throws IOException {
        logger.error(APIMessage.ENDTRY_POINT_UNAUTHORIZED, APIMessage.ACCOUNT_INVALID);
        httpServletResponse.sendError(HttpServletResponse.SC_UNAUTHORIZED, APIMessage.ACCOUNT_INVALID);
    }
}
