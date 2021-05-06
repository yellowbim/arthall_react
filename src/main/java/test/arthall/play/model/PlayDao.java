package test.arthall.play.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import test.arthall.common.commonDao;

@Data
/***
 * warning: Generating equals/hashCode implementation but without a call to superclass, even though this class does not extend java.lang.Object. If this is intentional, add '@EqualsAndHashCode(callSuper=false)' to your type.
 * 경로를 안띄우려고 사용
 */
@EqualsAndHashCode(callSuper=false)
public class PlayDao extends commonDao {

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
