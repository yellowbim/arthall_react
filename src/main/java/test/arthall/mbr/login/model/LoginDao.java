package test.arthall.mbr.login.model;

import lombok.Data;

@Data
public class LoginDao {

    private int no;
    private String title;
    private String writer;
    private String insDate;
    private String updDate;
    private int likes;
    private int counts;
}
