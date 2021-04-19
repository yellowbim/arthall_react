package test.arthall.fileUpload;


import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import test.arthall.main.model.MainDao;

import javax.servlet.http.HttpServletRequest;

public class Upload {


    public static String uploadTest(MainDao param, MultipartHttpServletRequest mre, HttpServletRequest req) {
        String test = req.getParameter("test");
        MultipartFile mf = mre.getFile("file");
        String uploadPath = "";

        String original = mf.getOriginalFilename();

        String path = "";
        uploadPath = path+original;
        System.out.println("현재경로"+System.getProperty("user.dir"));

        return "";
    }
}
