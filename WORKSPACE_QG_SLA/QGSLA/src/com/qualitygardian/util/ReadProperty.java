package com.qualitygardian.util;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.logging.Level;
import java.util.logging.Logger;

public class ReadProperty {
	
	private static Logger log = Logger.getLogger(ReadProperty.class.getName());

	private static final String FILE_CONFIG_QGSLA_FROM_SERVER = "config_qgsla.properties";

	
	public static String getValueFromPropertySideServer(String key) {
		System.out.println("IMPRIMIENDO EL JBOSSDIR " + System.getProperty("jboss.server.base.dir"));
		String path = System.getProperty("jboss.server.base.dir") + File.separator + FILE_CONFIG_QGSLA_FROM_SERVER;
		Properties properties = new Properties();
		File file = new File(path);
		String value = null;

		try {
			properties.load(new FileInputStream(file));
			value = properties.getProperty(key);
		} catch (FileNotFoundException e) {
			log.log(Level.SEVERE, e.getMessage());
		} catch (IOException e) {
			log.log(Level.SEVERE, e.getMessage());
		}

		return value;
	}

}
