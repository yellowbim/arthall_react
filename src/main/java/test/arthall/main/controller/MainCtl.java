package test.arthall.main.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import test.arthall.main.model.MainDao;
import test.arthall.main.service.MainSvc;
import test.arthall.play.model.PlayDao;
import test.arthall.play.service.PlaySvc;

import java.io.File;
import java.io.IOException;
import java.util.List;


// 로컬 react서버,  크롬 api test 사이트 CORS 제한 해제
@CrossOrigin(origins = {"http://localhost:3000","chrome-extension://aejoelaoggembcahagimdiliamlcdmfm"})
@RestController
@RequestMapping("/main")
public class MainCtl {

    @Autowired
    private MainSvc mainSvc;

    @Autowired
    private PlaySvc playSvc;


    /***
     * 메인 정보 가져오기
     */
    @RequestMapping("/")
    public List<PlayDao> arthallMain(MainDao param, PlayDao playList) throws Exception {
        return playSvc.getPlayList(playList);
    }






    /***
     * 파일 업로드 테스트
     */
    @RequestMapping("/fileUpload")
    public String fileUpload(@RequestParam MultipartFile file, MainDao param) throws Exception {
        String originalFileName = file.getOriginalFilename();
        String SAVE_PATH = System.getProperty("user.dir") + "\\src\\main\\frontend\\src\\components\\imgUpload\\";

        System.out.println("실제 파일 이름"+originalFileName);

        System.out.println("현재 경로"+SAVE_PATH);

        // 동영상 이런 부분은 용량 크기에 신경을 써야할듯
        // 지금은 yml 부분에 파일 용량 크기를 설정해놓음 10MB
        long fileSize = file.getSize();

        String safeFile = SAVE_PATH + System.currentTimeMillis() + originalFileName;

        System.out.println("저장경로"+safeFile);
        param.setFileName(System.currentTimeMillis() + originalFileName);
        try {
            file.transferTo(new File(safeFile));
            mainSvc.setFileContext(param);
        } catch (IllegalStateException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return "";
    }


    /***
     * 파일 조회
     */
    @RequestMapping("/fileList")
    public List<MainDao> fileList(MainDao param) throws Exception{
        System.out.println("page : "+param.getPage());
        System.out.println("rowSize : "+param.getRowSize());
        return mainSvc.getFileContextList(param);
    }




}
