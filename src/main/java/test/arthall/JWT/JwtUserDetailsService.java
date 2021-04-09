package test.arthall.JWT;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

/***
 * DB에서 UserDetail를 얻어와 AuthenticationManager에게 제공하는 역할
 * 이번에는 DB 없이 하드코딩된 User List에서 get userDetail
 */
@Service
public class JwtUserDetailsService implements UserDetailsService {

    /***
     * Spring Security 5.0에서는 Password를 BryptEncoder를 통해 Brypt화한다.
        * https://www.javainuse.com/onlineBcrypt 에서 user_pw를 Bcrypt화
            * 2a$10m/enYHaLsCwH2dKMUAtQp.ksGOA6lq7Fd2pnMb4L.yT4GyeAPRPyS
     * id : user_id, pw: user_pw로 고정해 사용자 확인
     * 사용자 확인 실패시 throw Exception
     */

    /**
     * 나중에 여기서 유저를 조회해서 조회를 하면됨
     */
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        if ("user_id".equals(username)) {
            return new User("user_id", "$2a$10$m/enYHaLsCwH2dKMUAtQp.ksGOA6lq7Fd2pnMb4L.yT4GyeAPRPyS",
                    new ArrayList<>());
        } else {
            throw new UsernameNotFoundException("User not found with username: " + username);
        }
    }
}
