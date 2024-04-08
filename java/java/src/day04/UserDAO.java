package day04;

import java.util.HashMap;

interface  DAO{
    void signUp(UserInfo userInfo);
    UserInfo checkUser(String id);
    UserInfo signIn(String id, String pw);
    void updatePw(String pw);

    void updateName(String name);

    void logout();

    void leaveUser();
}

class UserDAO implements DAO{
    HashMap<String, UserInfo> userDB = new HashMap<>();
    UserInfo user;
    boolean IsLogin = false;

    //    회원가입
    @Override
    public void signUp(UserInfo userInfo){
        userDB.put(userInfo.getId(),userInfo);
        System.out.println(userInfo.getName() + "님의 가입을 환영합니다.");
    }

    @Override
    public UserInfo checkUser(String id){
        UserInfo user = userDB.get(id);
        if(user != null) return user;
        else {
            System.out.println("존재하지 않는 아이디 입니다");
            return null;
        }
    }
    //    로그인
    @Override
    public UserInfo signIn(String id, String pw){
//        먼저 id가 존재하는 지 체크
        UserInfo loginUser = checkUser(id);

        if(loginUser == null) return null;
//        아이디에 대한 비밀번호 검사
        if( loginUser.getPw().equals(pw)){
            System.out.println(loginUser.getName() + "님 로그인 되었습니다");
            IsLogin = true;
            user = loginUser;
            return user;
        }else {
            System.out.println("비밀번호가 틀립니다.");
            return null;
        }

    }
    //    회원정보 수정
    @Override
    public void updatePw(String pw){
        user.setPw(pw);
        userDB.replace(user.getId(), user);
        System.out.println("비밀번호가 변경 되었습니다. ");
        System.out.println(user);

    }

    @Override
    public void updateName(String name){
        if(user == null){
            System.out.println(user);
            System.out.println("로그인 상태가 아닙니다.");
            return;
        }
        System.out.println(user);
        user.setName(name);
        userDB.replace(user.getId(), user);
        System.out.println("이름이 변경 되었습니다. ");
        System.out.println(user);
    }
    //    로그아웃
    @Override
    public void logout(){
        IsLogin = false;
        System.out.println(user.getName()+"님 로그아웃 되었습니다!");
    }

    //    탈퇴
    @Override
    public void leaveUser(){
        userDB.remove(user.getId());
        user = null;
        IsLogin = false;
        System.out.println("탈퇴 되었습니다.");
    }
}
