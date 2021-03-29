package test.arthall.board.model;

import lombok.Data;

@Data
public class BoardDao {

    private int no;
    private String title;
    private String writer;
    private String ins_date;
    private String upd_date;
    private int likes;
    private int counts;
}
