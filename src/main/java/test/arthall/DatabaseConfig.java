package test.arthall;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

import javax.sql.DataSource;

@Configuration
public class DatabaseConfig {

    @Autowired
    private ApplicationContext applicationContext;

    /***
     * 첫번째 DB 연결
     */
    @Bean
    @Primary
    @ConfigurationProperties(prefix = "spring.datasource1.hikari")
    public HikariConfig hikariConfig1() { return new HikariConfig(); }

    @Bean
    @Primary
    public DataSource dataSource1() {
        DataSource dataSource = new HikariDataSource(hikariConfig1());
        return dataSource;
    }

    @Bean
    @Primary
    public SqlSessionFactory sqlSessionFactory1(DataSource dataSource) throws Exception {
        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
        sqlSessionFactoryBean.setDataSource(dataSource);
        sqlSessionFactoryBean.setMapperLocations(applicationContext.getResources("classpath*:mybatis/mapper/*/*.xml"));
        sqlSessionFactoryBean.setConfigLocation(applicationContext.getResource("classpath:mybatis/mybatis-config.xml"));
        return sqlSessionFactoryBean.getObject();
    }

    @Bean
    @Primary
    public SqlSessionTemplate sqlSessionTemplate1(SqlSessionFactory sqlSessionFactory) {
        return new SqlSessionTemplate(sqlSessionFactory);
    }


    /***
     * 두번째 DB 연결
     */
//    @Bean
//    @ConfigurationProperties(prefix = "spring.datasource2.hikari")
//    public HikariConfig hikariConfig2() { return new HikariConfig(); }
//
//    @Bean
//    public DataSource dataSource2() {
//        DataSource dataSource = new HikariDataSource(hikariConfig2());
//        return dataSource;
//    }
//    @Bean
//    public SqlSessionFactory sqlSessionFactory2(DataSource dataSource) throws Exception {
//        SqlSessionFactoryBean sqlSessionFactoryBean = new SqlSessionFactoryBean();
//        sqlSessionFactoryBean.setDataSource(dataSource);
//        sqlSessionFactoryBean.setMapperLocations(applicationContext.getResources("classpath*:mybatis/mapper/board/test.xml"));
//        sqlSessionFactoryBean.setConfigLocation(applicationContext.getResource("classpath:mybatis/mybatis-config.xml"));
//        return sqlSessionFactoryBean.getObject();
//    }
//    @Bean
//    public SqlSessionTemplate sqlSessionTemplate2(SqlSessionFactory sqlSessionFactory) {
//        return new SqlSessionTemplate(sqlSessionFactory);
//    }


}