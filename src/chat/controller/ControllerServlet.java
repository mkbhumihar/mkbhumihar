package chat.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import chat.users.ChatUsers;

public class ControllerServlet extends HttpServlet  {
	private static final long serialVersionUID = 1L;
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {  
	        response.setContentType("text/html");  
	        List <ChatUsers> users= new ArrayList<ChatUsers>();
	        String [] u = new String[] {"Mohan","Rohan","Sohan", "Shalini", "Aahan"};
	        for(int i=0;i<5;i++) {
	        	ChatUsers user=new ChatUsers();  
		        user.setIntSerNo(917310+i); 
		        user.setStrName(u[i]) ;
		        users.add(user);
	        }
	        request.setAttribute("chatUsers",users);  
	        RequestDispatcher rd=request.getRequestDispatcher("chat2.jsp");  
	            rd.forward(request, response);  
	    }  
	  
	    @Override  
	    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {  
	        doPost(req, resp);  
	    }  

}
