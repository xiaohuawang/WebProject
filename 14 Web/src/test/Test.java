package test;

import java.sql.SQLException;

import db.DB;

public class Test {

	public static void main(String[] args) throws SQLException {
		// TODO Auto-generated method stub
		DB db=new DB();
		db.getConnection();
	}

}
