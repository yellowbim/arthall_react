package test.arthall.main.controller;


import org.apache.poi.openxml4j.opc.OPCPackage;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import test.arthall.main.model.MainDao;
import test.arthall.main.service.MainSvc;
import test.arthall.play.model.PlayDao;
import test.arthall.play.service.PlaySvc;

import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


// 로컬 react서버,  크롬 api test 사이트 CORS 제한 해제
//@CrossOrigin(origins = {"http://localhost:3000","http://www.yahmedora.com","http://13.125.199.82:3000.","chrome-extension://aejoelaoggembcahagimdiliamlcdmfm"})
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
        System.out.println("이미지파일 "+file);
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

    /***
     * 파일 엑셀 다운로드
     */
    @RequestMapping("/excelDown")
    public void excelDown(MainDao param, HttpServletResponse response) throws Exception{
        // 다운로드 할 목록 조회
        List<MainDao> paramDao = mainSvc.getFileContextList(param);
        System.out.println("========== 엑셀 다운로드 시작 ==========");

        Workbook wb = new XSSFWorkbook();
        Sheet sheet  = wb.createSheet("테스트 시트");
        Row row = null;
        Cell cell = null;
        int rowNum = 0;

        // Header
//        row = sheet.createRow(rowNum++);
//        cell = row.createCell(0);
//        cell.setCellValue("순서");
//        cell = row.createCell(1);
//        cell.setCellValue("경로");
//        cell = row.createCell(2);
//        cell.setCellValue("이미지");

        for (int i = 0; i< paramDao.size(); i++){
            row = sheet.createRow(rowNum++);
            cell = row.createCell(0);
            cell.setCellValue(paramDao.get(i).getSeq());
            cell = row.createCell(1);
            cell.setCellValue(paramDao.get(i).getFileName());
            cell = row.createCell(2);
            cell.setCellValue("../../frontend/src/components/imgUpload/"+paramDao.get(i).getFileName());

        }


        // 컨텐츠 타입과 파일명 지정
        response.setContentType("ms-vnd/excel");
        response.setHeader("Content-Disposition", "attachment;filename=example.xlsx");

        // Excel File Output
        wb.write(response.getOutputStream());
        wb.close();
        System.out.println("========== 엑셀 다운로드 끝 ==========");

    }


    /***
     * 파일 엑셀 업로드 및 DB 저장
     */
    @RequestMapping("/excelUpload")
    public List<MainDao> excelUpload(@RequestParam MultipartFile excelFile) throws Exception{
        System.out.println("엑셀파일"+excelFile);

        List<MainDao> list = new ArrayList<>();
        try{
            OPCPackage opcPackage = OPCPackage.open(excelFile.getInputStream());
            // 엑셀 workbook 생성하기
            XSSFWorkbook workbook =new XSSFWorkbook(opcPackage);

            // 첫번째 시트 불러오기
            XSSFSheet sheet = workbook.getSheetAt(0);

            // 왜 마지막 rowNum이 아니라 +1을 해줄까?
            System.out.println("마지막 시트 숫자"+sheet.getLastRowNum());
            for (int i = 0; i < sheet.getLastRowNum()+1; i++ ){
                MainDao param = new MainDao();
                Row row = sheet.getRow(i);

                // 행이 존재하지 않으면 패스
                if (null == row || row.getLastCellNum() == 0){
                    continue;
                }

                Cell cell = row.getCell(0);
                // 행의 1번째 열


                // 행의 전체 개수를 구하면 for문
                System.out.println("cell "+cell.getCellType());
                System.out.println("전체 row.lastCell "+ row.getLastCellNum());

                if (null != cell){
                    param.setSeq((int) Float.parseFloat(String.valueOf(cell)));
                }

                // 행의 2번째 열
                cell = row.getCell(1);
                if (null != cell){
                    param.setFileName(String.valueOf(cell));
                }
                list.add(param);
            }
        } catch (Exception e){
            e.printStackTrace();
        }
    return list;
    }









}
