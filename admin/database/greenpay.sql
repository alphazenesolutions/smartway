-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 28, 2021 at 11:52 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `greenpay`
--

-- --------------------------------------------------------

--
-- Table structure for table `admins`
--

CREATE TABLE `admins` (
  `id` int(100) NOT NULL,
  `email` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `phone` varchar(256) NOT NULL,
  `wallet` int(255) NOT NULL DEFAULT 0,
  `role` varchar(256) NOT NULL DEFAULT 'admin',
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `all_certificates`
--

CREATE TABLE `all_certificates` (
  `id` int(255) NOT NULL,
  `certificateid` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `number` varchar(256) NOT NULL,
  `appliedname` varchar(256) NOT NULL,
  `appliedemail` varchar(256) NOT NULL,
  `appliedeno` varchar(256) NOT NULL,
  `certificatename` varchar(256) NOT NULL,
  `certificates` varchar(256) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `slip` varchar(256) NOT NULL DEFAULT 'null',
  `iscomplete` varchar(256) NOT NULL DEFAULT 'false',
  `userid` varchar(256) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `distributorreg`
--

CREATE TABLE `distributorreg` (
  `id` int(255) NOT NULL,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `number` varchar(256) NOT NULL,
  `location` varchar(256) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `distributors`
--

CREATE TABLE `distributors` (
  `id` int(255) NOT NULL,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `number` varchar(256) NOT NULL,
  `location` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `userid` varchar(256) NOT NULL,
  `referralcode` varchar(256) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `marquee`
--

CREATE TABLE `marquee` (
  `id` int(255) NOT NULL,
  `userid` varchar(256) NOT NULL,
  `message` varchar(256) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `other_certificates`
--

CREATE TABLE `other_certificates` (
  `id` int(255) NOT NULL,
  `certificateid` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `number` varchar(256) NOT NULL,
  `appliedname` varchar(256) NOT NULL,
  `appliedemail` varchar(256) NOT NULL,
  `appliedeno` varchar(256) NOT NULL,
  `certificatename` varchar(256) NOT NULL,
  `certificates` varchar(256) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `slip` varchar(256) NOT NULL DEFAULT 'null',
  `iscomplete` varchar(256) NOT NULL DEFAULT 'false',
  `userid` varchar(256) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `other_certificates`
--

INSERT INTO `other_certificates` (`id`, `certificateid`, `name`, `email`, `number`, `appliedname`, `appliedemail`, `appliedeno`, `certificatename`, `certificates`, `slip`, `iscomplete`, `userid`, `date`) VALUES
(9, '111111111111', 'Kalidas', 's.kalidas120799@gmail.com', '+919080711080', 'test', 'test@gmail.com', '123456', 'Flight Ticket', '[{\"passport\":\"111\"},{\"trip\":\"111\"},{\"aadhar\":\"https://firebasestorage.googleapis.com/v0/b/test-35516.appspot.com/o/userid%2FKalidas%2FFlightticket%2Fauther%2F\'%20%2B%20happy.gif?alt=media&token=c9d13a0f-b53b-430d-843e-04717ea58d14\"},{\"others\":\"none\"}]', 'null', 'true', '77818rgy', '2021-07-28 09:43:46');

-- --------------------------------------------------------

--
-- Table structure for table `pan_certificates`
--

CREATE TABLE `pan_certificates` (
  `id` int(255) NOT NULL,
  `certificateid` varchar(256) NOT NULL,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `number` varchar(256) NOT NULL,
  `appliedname` varchar(256) NOT NULL,
  `appliedemail` varchar(256) NOT NULL,
  `appliedeno` varchar(256) NOT NULL,
  `certificatename` varchar(256) NOT NULL,
  `certificates` varchar(256) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `slip` varchar(256) NOT NULL DEFAULT 'null',
  `iscomplete` varchar(256) NOT NULL DEFAULT 'false',
  `userid` varchar(256) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `tickets`
--

CREATE TABLE `tickets` (
  `id` int(255) NOT NULL,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `number` varchar(256) NOT NULL,
  `message` varchar(256) NOT NULL,
  `subject` varchar(256) NOT NULL,
  `userid` varchar(256) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `userreg`
--

CREATE TABLE `userreg` (
  `id` int(100) NOT NULL,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `number` varchar(256) NOT NULL,
  `location` varchar(256) NOT NULL,
  `role` varchar(256) NOT NULL,
  `referral` varchar(256) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `userreg`
--

INSERT INTO `userreg` (`id`, `name`, `email`, `number`, `location`, `role`, `referral`, `date`) VALUES
(1, 'kalidas', 'kalidas1@gmail.com', '0422587456', 'cbe', 'client', '', '2021-07-28 09:30:11'),
(2, 'kalidas', 'kalidas@gmail.com', '0422587456', 'cbe', 'client', 'null', '2021-07-28 09:30:33');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(100) NOT NULL,
  `name` varchar(256) NOT NULL,
  `email` varchar(256) NOT NULL,
  `location` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `number` varchar(256) NOT NULL,
  `wallet` int(255) NOT NULL DEFAULT 0,
  `userid` varchar(256) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `location`, `password`, `number`, `wallet`, `userid`, `date`) VALUES
(20, 'kalidas', 'kalidas@gmail.com', 'cbe', '$2a$10$.5j.qQn/.ZK51n51UZ226Oghb1ubVE9cUoNgEYtnmo0h9VZ1jh6Fa', '0422587456', 0, '1627463282199', '2021-07-28 09:08:02'),
(21, 'kalidas', 'kalidas1@gmail.com', 'cbe', '$2a$10$Lt2BsRvas0Z3F4a.w4o1JeXPM3xUlXfs4qm3jDEHXv3Vt0.TEyn7a', '0422587456', 0, '1627464006842', '2021-07-28 09:20:06');

-- --------------------------------------------------------

--
-- Table structure for table `wallethistory`
--

CREATE TABLE `wallethistory` (
  `id` int(255) NOT NULL,
  `name` varchar(256) NOT NULL,
  `amount` varchar(256) NOT NULL,
  `certificatename` varchar(256) NOT NULL,
  `userid` varchar(256) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `all_certificates`
--
ALTER TABLE `all_certificates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `distributorreg`
--
ALTER TABLE `distributorreg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `distributors`
--
ALTER TABLE `distributors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `marquee`
--
ALTER TABLE `marquee`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `other_certificates`
--
ALTER TABLE `other_certificates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `pan_certificates`
--
ALTER TABLE `pan_certificates`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `userreg`
--
ALTER TABLE `userreg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `wallethistory`
--
ALTER TABLE `wallethistory`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admins`
--
ALTER TABLE `admins`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `all_certificates`
--
ALTER TABLE `all_certificates`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `distributorreg`
--
ALTER TABLE `distributorreg`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `distributors`
--
ALTER TABLE `distributors`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `marquee`
--
ALTER TABLE `marquee`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `other_certificates`
--
ALTER TABLE `other_certificates`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `pan_certificates`
--
ALTER TABLE `pan_certificates`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `userreg`
--
ALTER TABLE `userreg`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `wallethistory`
--
ALTER TABLE `wallethistory`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
