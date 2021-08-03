package com.Chess.Chess.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;


/**
 * 
 * @author Zachary Ishmael
 *
 */
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	UserDetailsServiceImpl service;
	@Override
	protected void configure(HttpSecurity https) throws Exception {
		https
			.requiresChannel()
			.anyRequest()
			.requiresSecure()
			
		.and().authorizeRequests()
		.antMatchers("/","/login","/register","/home","/register/**","/h2-console/**","/authenticate").permitAll()
		
		.and().authorizeRequests()
			.antMatchers("/game/**").hasRole("USER").anyRequest().authenticated()//note: because hasRole appends "ROLE_" to what ever string provided
			//requires authenticated access 
		
		.and().formLogin() 
				.loginPage("/login").permitAll()
				.defaultSuccessUrl("/game",true)
				.failureUrl("/login?error")
				.passwordParameter("password")
				.usernameParameter("username")
				.loginProcessingUrl("/authenticate")
				// .failureForwardUrl("/login-error")
				.failureHandler(new SimpleUrlAuthenticationFailureHandler("/login?error"))//calls this url authentication fails
		
		.and().rememberMe()
		.rememberMeParameter("remember")
		.rememberMeCookieName("Chess")
		.rememberMeCookieDomain("localhost")
		.tokenValiditySeconds(172800)//2 days
		
		.and().logout()
			.invalidateHttpSession(true)
			.deleteCookies("JSESSIONID","Chess")//deletes cookies
			.logoutRequestMatcher(new AntPathRequestMatcher("/logout"))
			.logoutSuccessUrl("/login")
			.logoutSuccessUrl("/logout-success")
			.permitAll()
		
		
		.and().exceptionHandling().accessDeniedPage("/login-error")

		.and()
            .csrf().ignoringAntMatchers("/h2-console/**")
        .and()
            .headers().frameOptions().disable();//prevents h2-console frame problems
		; 
	}
	
	
	@Override
	public void configure (AuthenticationManagerBuilder auth) throws Exception {
		System.out.println("configure authenticationManager - Security Config");
		PasswordEncoder encoder = new BCryptPasswordEncoder();
		auth.userDetailsService(service).passwordEncoder(encoder);
	}
	

	
}
