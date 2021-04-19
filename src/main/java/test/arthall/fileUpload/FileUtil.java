//package util;
//
//import org.springframework.web.multipart.MultipartFile;
//
//import java.io.File;
//import java.util.Date;
//
//public class FileUtil {
//
//	public String fileName;
//
//	public void fileUpload(MultipartFile file, String uploadPath) {
//						//1. 첫번째 매개변수는 파일 객체           실제로 업로되는 경로는 매개변수로 넘겨주
//
//		if (!file.isEmpty()) {
//			// 파일명 임의의숫자로 변경
//			String ext = "";
//			//원본파일명을 get
//			//strig indexOf --> index를 return하는 매서드
//			//lastIndexOF("." --> .이있는 index를return 확장자를
//			if (file.getOriginalFilename().lastIndexOf(".") > -1) { // 확장자가 있으면
//				ext = file.getOriginalFilename().substring(file.getOriginalFilename().lastIndexOf("."));
//			}
//			String fileName = new Date().getTime()+ext;
//			//
//			this.fileName = fileName;
//
//			// 파일저장
//			System.out.println(uploadPath);
//			try {
//				// 파일의 객체가 0이다
//				System.out.println(uploadPath+fileName);
//				file.transferTo(new File(uploadPath+fileName));
//			} catch (Exception e) {
//				System.out.println(e.toString());
//			}
//		}
//	}
//}
