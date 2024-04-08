package day04;

import java.util.Scanner;

public class UserTest {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        UserDAO userDAO = new UserDAO();

        boolean condition = true;
        while(condition){
            System.out.println("메뉴를 선택하세요 1. 회원가입, 2. 로그인, 3. 회원 정보 수정, 4. 로그아웃, 5. 탈퇴, 0. 종료");
            int menu = sc.nextInt();
            switch (menu) {
                case 1:
                    System.out.println("아이디, 비밀번호를 입력하세요 : ");
                    String id = sc.next();
                    String pw = sc.next();

                    System.out.println("이름을 입력하세요 : ");
                    String name;
                    while (true) {
                        name = sc.next();
                        if (name.matches(".*[0-9].*")) {
                            System.out.println("이름에는 숫자가 포함될 수 없습니다. 다시 입력하세요!");
                            continue;
                        } else {
                            break;
                        }
                    }
                    UserInfo user = new UserInfo(id, pw, name);
                    userDAO.signUp((user));
                    break;
                case 2:
                    System.out.println("로그인할 아이디와 비밀번호를 입력하십시오");
                    String loginId = sc.next();
                    String loginPw = sc.next();
                    userDAO.signIn(loginId, loginPw);

                    break;
                case 3:
                    if(userDAO.IsLogin){
                        System.out.println("수정할 정보를 선택하세요. 1. 비밀번호 2. 이름");
                        int updateInfo = sc.nextInt();
                        if(updateInfo == 1) {
                            System.out.println("비밀번호를 입력하세요");
                            String updatePw = sc.next();
                            userDAO.updatePw(updatePw);
                        }else{
                            System.out.println("이름을 입력하세요");
                            String updateName = sc.next();
                            userDAO.updateName(updateName);

                        }
                    }else{
                        System.out.println("로그인 상태가 아닙니다.");
                    }

                    break;
                case 4:
                    if(userDAO.IsLogin){
                        userDAO.logout();
                    }else{
                        System.out.println("로그인 상태가 아닙니다.");
                    }
                    break;
                case 5:
                    if(userDAO.IsLogin){
                        userDAO.leaveUser();
                    }else {
                        System.out.println("로그인 상태가 아닙니다.");
                    }
                    break;
                default:
                    condition = false;
                    System.out.println("프로그램을 종료합니다!");
                    break;
            }
        }
    }
}



