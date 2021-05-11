package test.arthall;

import ch.qos.logback.classic.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig implements WebMvcConfigurer {

    private final Logger logger = (Logger) LoggerFactory.getLogger(this.getClass());

    @Value("${spring.profiles.active:local}")
    private String SPRING_PROFILES_ACTIVE;

    private final long MAX_AGE = 3600;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
//      WebMvcConfigurer.super.addCorsMappings(registry);

//      if("local".equals(SPRING_PROFILES_ACTIVE)) {
        logger.info("------------------------------------");
        logger.info("Access-Control-Allow-Origin : *     ");
        logger.info("------------------------------------");
        registry.addMapping("/**")
                .allowedOriginPatterns("*")
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(MAX_AGE);
//      }
    }

}