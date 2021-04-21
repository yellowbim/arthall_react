package test.arthall.play.model;

import lombok.Data;

@Data
public class PlayDao {

    // 공연
    private String no;
    private String hallName;
    private String playType;
    private String playNo;
    private String playSubType;
    private String playName;
    private String subTitle;
    private String frDttm;
    private String toDttm;
    private String starring;
    private String content;
    private String rating;
    private String runningTime;
    private String inquiry;
    private String producer;
    private String fileName;

    // 전시
    private String artist;
    private int priceAdult;




    // 백그라운드
    private String bgNum;

}
