package test.arthall.board.model;

import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import javax.persistence.*;

@Entity
@Table(name = "board")
@DynamicInsert
@DynamicUpdate
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int no;

    @Column(name = "title")
    private String title;

    @Column(name = "writer")
    private String writer;

    @Column(name = "ins_date")
    private String ins_date;

    @Column(name = "upd_date")
    private String upd_date;

    @Column(name = "likes")
    private int likes;

    @Column(name = "counts")
    private int counts;


}
