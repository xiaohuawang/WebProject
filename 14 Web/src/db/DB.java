package db;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public class DB {

	public static Connection getConnection() throws SQLException {
		// URL of Oracle database server
		try {
			Class.forName("oracle.jdbc.driver.OracleDriver");
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		String url = "jdbc:oracle:thin:@10.101.121.11:1521:xe";
		// properties for creating connection to Oracle database
		Properties props = new Properties();
		props.setProperty("user", "Import Team Name");
		props.setProperty("password", "2017");

		// creating connection to Oracle database using JDBC
		Connection conn = DriverManager.getConnection(url, props);
		System.out.println("success");
		return conn;
	}
	
	
//	public ArrayList<>
	
//	create table
//	public class JDBCDemoMain {
//		public static void main(String[] args) {
//			String driver = "oracle.jdbc.driver.OracleDriver";
//			String dbURL = "jdbc:oracle:thin:@10.101.121.11:1521:xe";
//			String dbUserName = "Import Team Name";
//			String dbPassword = "2017";
//			
//			Connection conn = null;
//			Statement stmt = null;
//			
//			try{
//				Class.forName(driver);
//				System.out.println("connectiong to database");
//				conn=DriverManager.getConnection(dbURL, dbUserName, dbPassword);
//				System.out.println("connected to DB sucessfullly");
//				System.out.println("Creating table inside database");
//				stmt = conn.createStatement();
//				
//				String sql = "CREATE TABLE REGISTRATION1 " +
//		                   "(id INTEGER not NULL, " +
//		                   " first VARCHAR(255), " + 
//		                   " last VARCHAR(255), " + 
//		                   " age INTEGER, " + 
//		                   " PRIMARY KEY ( id ))"; 
//				stmt.executeUpdate(sql);
//				System.out.println("table is created ");
//				
//				
//			}catch(ClassNotFoundException e){
//				e.printStackTrace();
//			} catch (SQLException e) {
//			
//				e.printStackTrace();
//			}
//
//		}
//	}

	
	
//	 String url="jdbc:oracle:thin:@10.101.121.11:1521:xe";
//     properties for creating connection to Oracle database
//     Properties props = new Properties();
//     props.setProperty("user", "Import Team Name");
//     props.setProperty("password", "2017");
//   
//     creating connection to Oracle database using JDBC
//     Connection conn = DriverManager.getConnection(url,props);
}


















