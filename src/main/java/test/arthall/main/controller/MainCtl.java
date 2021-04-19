package test.arthall.main.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import test.arthall.main.model.MainDao;
import test.arthall.main.service.MainSvc;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


// 로컬 react서버,  크롬 api test 사이트 CORS 제한 해제
@CrossOrigin(origins = {"http://localhost:3000","chrome-extension://aejoelaoggembcahagimdiliamlcdmfm"})
@RestController
@RequestMapping("/main")
public class MainCtl {

    @Autowired
    private MainSvc mainSvc;

    /***
     * 메인 정보 가져오기
     */
    public String arthallMain(MainDao param) throws Exception {

        return "";
    }



    /***
     * 파일 업로드 테스트
     */
    @RequestMapping("/fileUpload")
    public String fileUpload(@RequestParam MultipartFile file, MainDao param) throws Exception {
        String result = "";
        String originalFileName = file.getOriginalFilename();
        String SAVE_PATH = System.getProperty("user.dir") + "\\src\\main\\frontend\\src\\components\\imgUpload\\";

        String ext = "";
        System.out.println("실제 파일 이름"+originalFileName);

        System.out.println("현재 경로"+SAVE_PATH);

        long fileSize = file.getSize();
        String safeFile = SAVE_PATH + System.currentTimeMillis() + originalFileName;

        System.out.println("저장경로"+safeFile);
        param.setFileName(System.currentTimeMillis() + originalFileName);
        try {
            file.transferTo(new File(safeFile));
            mainSvc.setFileContext(param);
            result = "성공!!!";
        } catch (IllegalStateException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            result = "실패ㅜㅜ";
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            result = "실패ㅠㅠ";
        }
        return "";
    }


    /***
     * 파일 조회
     */
    @RequestMapping("/fileList")
    public List<MainDao> fileList(MainDao param) throws Exception{
        ArrayList<Integer> list = new ArrayList<>();
        int[] arr = new int[4];
        arr[0] = 5;
        arr[1] = 9;
        arr[2] = 7;
        arr[3] = 10;

        int divisor = 5;

        int namuegi = 0;

        for (int i = 0; i < arr.length; i++){
            System.out.println(i+" 번째 ");
            if (arr[i] == divisor || arr[i] > divisor){
                while (namuegi > divisor){
                    namuegi = arr[i] %  divisor;
                }
            }
            if (namuegi == 0){
                list.add(arr[i]);
            } else {
                continue;
            }

        }
        if (list.size() == 0){
            System.out.println(-1);
        }else{
            System.out.println("리스트 개져오기");
            for (int i = 0; i < list.size(); i++){
                System.out.println(list.get(i));
            }
        }



        return mainSvc.getFileContext(param);
    }




}
