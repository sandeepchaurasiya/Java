-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 06, 2019 at 03:36 PM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 7.1.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testing`
--

-- --------------------------------------------------------

--
-- Table structure for table `gmail_addon`
--

CREATE TABLE `gmail_addon` (
  `id` int(11) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `gmail_addon`
--

INSERT INTO `gmail_addon` (`id`, `email`) VALUES
(1, 'sandeep.chaurasiya@wdipl.com'),
(2, 'sandeep.chaurasiya@wdipl.com'),
(8, 'sandeep.chaurasiya@wdipl.com'),
(9, 'sandeep.chaurasiya@wdipl.com'),
(10, 'sandeep.chaurasiya@wdipl.com'),
(11, 'sandeep.chaurasiya@wdipl.com'),
(12, 'sandeep.chaurasiya@wdipl.com'),
(13, ''),
(14, 'sandeep.chaurasiya@wdipl.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `gmail_addon`
--
ALTER TABLE `gmail_addon`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `gmail_addon`
--
ALTER TABLE `gmail_addon`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
